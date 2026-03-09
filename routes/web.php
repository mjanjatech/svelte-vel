<?php

use Illuminate\Support\Facades\Route;
use App\Events\RoastCompleted;
use Laravel\Fortify\Features;
use App\Http\Controllers\CritiqueController;
use App\Http\Controllers\GuestCritiqueController;
use App\Http\Controllers\GuestBlueprintController;
use App\Http\Controllers\ToolsController;
use Inertia\Inertia;

Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

// Guest routes for roast and blueprint
Route::get('/roast/guest', [GuestCritiqueController::class, 'showRoaster'])->name('guest.roast');
Route::post('/roast/guest', [GuestCritiqueController::class, 'startRoast'])->name('guest.startRoast');
Route::get('/roast/guest/{uniqueId}', [GuestCritiqueController::class, 'show'])->name('guest.show');

Route::get('/blueprint/guest', [GuestBlueprintController::class, 'blueprint'])->name('blueprint.guest');
Route::post('/blueprint/guest', [GuestBlueprintController::class, 'start'])->name('blueprint.guest.start');
Route::get('/blueprint/guest/{uniqueId}', [GuestBlueprintController::class, 'showDetails'])->name('blueprint.guest.show');

// Pro routes for roast and blueprint (requires authentication)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/roast/pro', [ProCritiqueController::class, 'showRoaster'])->name('pro.roast');
    Route::post('/roast/pro', [ProCritiqueController::class, 'startRoast'])->name('pro.startRoast');
    Route::get('/roast/pro/{uniqueId}', [ProCritiqueController::class, 'show'])->name('pro.show');
    
    Route::get('/blueprint/pro', [ProBlueprintController::class, 'blueprint'])->name('blueprint.pro');
    Route::post('/blueprint/pro', [ProBlueprintController::class, 'start'])->name('blueprint.pro.start');
    Route::get('/blueprint/pro/{uniqueId}', [ProBlueprintController::class, 'showDetails'])->name('blueprint.pro.show');
});

Route::post('/api/audit/scrape', [App\Http\Controllers\AuditController::class, 'scrape']);
Route::get('/api/audit/seo-status/{id}', [App\Http\Controllers\AuditController::class, 'seoStatus']);
Route::post('/api/audit/analyze-page-speed', [App\Http\Controllers\AuditController::class, 'analyzePageSpeed']);
Route::get('/api/audit/status/{id}', [App\Http\Controllers\AuditController::class, 'status']);

Route::middleware(['auth', 'verified'])->group(function () {
     Route::get('dashboard', [CritiqueController::class, 'dashboard'])->name('dashboard');
    
    Route::get('critiques/discovery', function () {
        return Inertia::render('Critiques/Discovery');
    })->name('critiques.discovery');
    Route::post('critiques/discovery/store', [CritiqueController::class, 'storeDiscovery'])->name('critiques.discovery.store');
    
    Route::resource('critiques', CritiqueController::class);
    Route::post('critiques/{critique}/claim', [CritiqueController::class, 'claim'])->name('critiques.claim');
    Route::post('critiques/{critique}/items', [CritiqueController::class, 'addItem'])->name('critiques.items.store');
    Route::put('critiques/{critique}/items/{item}', [CritiqueController::class, 'updateItem'])->name('critiques.items.update');
    Route::delete('critiques/{critique}/items/{item}', [CritiqueController::class, 'deleteItem'])->name('critiques.items.destroy');
    Route::post('critiques/{critique}/upload-proposed-ui', [CritiqueController::class, 'uploadProposedUI'])->name('critiques.upload-proposed-ui');
    Route::post('critiques/{critique}/unlock', [CritiqueController::class, 'unlock'])->name('critiques.unlock');
    Route::get('critiques/{critique}/summary', [CritiqueController::class, 'generateExecutiveSummary'])->name('critiques.summary');
    Route::post('critiques/{critique}/chat', [CritiqueController::class, 'chat'])->name('critiques.chat');

     // Tools routes
     Route::get('tools/image-optimizer', [ToolsController::class, 'imageOptimizer'])->name('tools.image-optimizer');
     Route::post('api/tools/optimize-image', [ToolsController::class, 'optimizeImage']);
     Route::get('tools/contrast-checker', [ToolsController::class, 'contrastChecker'])->name('tools.contrast-checker');
     Route::get('tools/dns-lookup', [ToolsController::class, 'dnsLookup'])->name('tools.dns-lookup');
     Route::get('api/tools/dns-lookup', [ToolsController::class, 'performDnsLookup']);
});

// Public route for viewing critiques
Route::get('critiques/{id}/view', [CritiqueController::class, 'show'])->name('critiques.public.show');

// Test route to dispatch RoastCompleted event
Route::get('/test-reverb/{id}', function ($id) {
    \Log::debug('Test route hit for critique ID: ' . $id);
    $roast = "Test roast message for critique {$id}";
    RoastCompleted::dispatch($id, $roast);
    \Log::debug('Event dispatched successfully');
    return "Event dispatched to channel roasts.{$id} with message: " . $roast;
});

require __DIR__.'/settings.php';
