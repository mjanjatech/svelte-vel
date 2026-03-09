<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Critique;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GuestCritiqueController extends Controller
{
    public function showRoaster()
    {
        return Inertia::render('GuestRoast');
    }

    public function startRoast(Request $request)
{
    // 1. Initial check to ensure we have a string to work with
    $url = (string) $request->input('url');

    if ($url && !str_starts_with($url, 'http://') && !str_starts_with($url, 'https://')) {
        $url = 'https://' . $url;
    }

    // 2. Merge back and validate
    $request->merge(['url' => $url]);
    
    // This will now catch empty strings or invalid formats properly
    $request->validate([
        'url' => 'required|url',
    ]);

        $critique = Critique::create([
            'url' => $request->url,
            'unique_id' => Str::uuid(),
            'status' => 'processing',
            'is_unlocked' => false,
        ]);
        
        \Log::debug('Created critique:', $critique->toArray());

        // Dispatch the roast generation job
        \App\Jobs\GenerateRoastJob::dispatch($critique);
        
        session(['active_guest_critique' => $critique->unique_id]);
        
        \Log::debug('Redirecting to:', ['route' => 'guest.show', 'uniqueId' => $critique->unique_id]);

        return redirect()->route('guest.show', $critique->unique_id);
    }

    public function show($uniqueId)
    {
        $critique = Critique::where('unique_id', $uniqueId)->firstOrFail();

        return Inertia::render('GuestCritiqueShow', [
            'critique' => $critique,
        ]);
    }
}
