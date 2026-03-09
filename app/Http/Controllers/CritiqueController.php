<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Critique;
use App\Models\CritiqueItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CritiqueController extends Controller
{


    public function index()
    {
        $critiques = Critique::with(['user', 'claimedBy', 'items'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Critiques/Index', [
            'critiques' => $critiques,
        ]);
    }

    public function dashboard()
    {
        $user = auth()->user();
        
        $totalCritiques = Critique::where('user_id', $user->id)->count();
        $pendingCritiques = Critique::where('user_id', $user->id)->where('status', 'pending')->count();
        $completedCritiques = Critique::where('user_id', $user->id)->where('status', 'completed')->count();
        $averageScore = Critique::where('user_id', $user->id)->whereNotNull('score')->avg('score') ?? 0;
        
        $recentCritiques = Critique::with(['items'])
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();
            
        $performanceData = Critique::where('user_id', $user->id)
            ->whereNotNull('score')
            ->selectRaw('DATE(created_at) as date, AVG(score) as avg_score')
            ->groupBy('date')
            ->orderBy('date')
            ->take(30)
            ->get();

        return Inertia::render('Dashboard', [
            'totalCritiques' => $totalCritiques,
            'pendingCritiques' => $pendingCritiques,
            'completedCritiques' => $completedCritiques,
            'averageScore' => round($averageScore, 1) ?? 0,
            'recentCritiques' => $recentCritiques,
            'performanceData' => $performanceData,
        ]);
    }

    public function create()
    {
        return Inertia::render('Critiques/Create');
    }

    public function storeDiscovery(Request $request)
    {
        $validated = $request->validate([
            'industry' => 'required|string',
            'vision' => 'required|string|min:20',
            'competitor_url' => 'nullable|url',
        ]);

        $project = Critique::create([
            'user_id' => auth()->id(),
            'url' => $validated['competitor_url'] ?? 'new-project.local',
            'title' => "New " . $validated['industry'] . " Project",
            'description' => $validated['vision'],
            'status' => 'discovery',
            'unique_id' => Str::uuid(),
        ]);

        // Dispatch a specific Discovery Job for AI to build the blueprint
        \App\Jobs\GenerateProjectBlueprintJob::dispatch($project);

        return redirect()->route('critiques.show', $project->id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'url' => 'required|url',
            'description' => 'nullable|string',
            'lead_company_name' => 'nullable|string|max:255',
            'estimated_revenue_loss' => 'nullable|numeric|min:0',
        ]);

        $critique = Critique::create([
            'user_id' => auth()->id(),
            'url' => $request->url,
            'description' => $request->description,
            'status' => 'pending',
            'unique_id' => Str::uuid(),
            'lead_company_name' => $request->lead_company_name,
            'estimated_revenue_loss' => $request->estimated_revenue_loss,
        ]);

        // Dispatch the audit pipeline jobs
        \App\Jobs\AuditPipelineJob::dispatch($critique);

        return redirect()->route('critiques.index')
            ->with('success', 'Critique created successfully. The audit is being processed.');
    }

    public function show(Critique $critique)
    {
        // Public view via UUID
        if (request()->has('unique_id')) {
            $critique = Critique::where('unique_id', request()->unique_id)->firstOrFail();
            $critique->update(['last_viewed_at' => now()]);
            
            // Logical Gate: If they haven't "unlocked" it, only show the score and 2 items
            $items = $critique->is_unlocked 
                ? $critique->items 
                : $critique->items()->limit(2)->get();

            return Inertia::render('Critiques/Show', [
                'critique' => $critique,
                'items' => $items,
                'is_locked' => !$critique->is_unlocked,
                'initialInteractions' => $critique->interactions,
            ]);
        } 
        
        // Private view for authenticated users
        $this->authorize('view', $critique);
        $critique->load(['user', 'claimedBy', 'items', 'interactions']);

        return Inertia::render('Critiques/Show', [
            'critique' => $critique,
            'items' => $critique->items,
            'is_locked' => false,
            'initialInteractions' => $critique->interactions,
        ]);
    }

    public function uploadProposedUI(Request $request, Critique $critique)
    {
        $this->authorize('update', $critique);
        
        $request->validate(['image' => 'required|image']);
        
        $path = $request->file('image')->store('proposals', 'public');
        $critique->update(['proposed_ui_path' => $path]);

        return back()->with('success', 'Visual proposal uploaded!');
    }

    public function unlock(Critique $critique)
    {
        $this->authorize('update', $critique);
        $critique->update(['is_unlocked' => true]);

        return back()->with('success', 'Critique unlocked!');
    }

    public function edit(Critique $critique)
    {
        $this->authorize('update', $critique);
        $critique->load(['items']);

        return Inertia::render('Critiques/Edit', [
            'critique' => $critique,
        ]);
    }

    public function update(Request $request, Critique $critique)
    {
        $this->authorize('update', $critique);

        $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'score' => 'nullable|integer|min:0|max:100',
            'status' => 'required|string',
            'lead_company_name' => 'nullable|string|max:255',
            'estimated_revenue_loss' => 'nullable|numeric|min:0',
        ]);

        $critique->update($request->all());

        return redirect()->route('critiques.index')
            ->with('success', 'Critique updated successfully.');
    }

    public function destroy(Critique $critique)
    {
        $this->authorize('delete', $critique);
        $critique->delete();

        return redirect()->route('critiques.index')
            ->with('success', 'Critique deleted successfully.');
    }

    public function claim(Critique $critique)
    {
        $this->authorize('update', $critique);
        $critique->update(['claimed_by' => auth()->id()]);

        return redirect()->route('critiques.index')
            ->with('success', 'Critique claimed successfully.');
    }

    public function addItem(Request $request, Critique $critique)
    {
        $this->authorize('update', $critique);

        $request->validate([
            'category' => 'required|string|in:conversion_friction,trust_deficit,mobile_agony,seo_suicide',
            'comment' => 'required|string',
            'coordinates' => 'nullable|json',
            'is_automated' => 'boolean',
        ]);

        $critique->items()->create($request->all());

        return back()->with('success', 'Critique item added successfully.');
    }

    public function updateItem(Request $request, Critique $critique, CritiqueItem $item)
    {
        $this->authorize('update', $critique);
        $this->authorize('update', $item);

        $request->validate([
            'category' => 'required|string|in:conversion_friction,trust_deficit,mobile_agony,seo_suicide',
            'comment' => 'required|string',
            'coordinates' => 'nullable|json',
        ]);

        $item->update($request->all());

        return back()->with('success', 'Critique item updated successfully.');
    }

    public function deleteItem(Critique $critique, CritiqueItem $item)
    {
        $this->authorize('delete', $critique);
        $this->authorize('delete', $item);
        $item->delete();

        return back()->with('success', 'Critique item deleted successfully.');
    }

    public function generateExecutiveSummary(Critique $critique)
    {
        $this->authorize('view', $critique);

        return response()->stream(function () use ($critique) {
            $response = Ai::assistant('auditor')
                ->withContext([
                    'url' => $critique->url,
                    'score' => $critique->score,
                    'items' => $critique->items->pluck('comment', 'category'),
                    'lead_company_name' => $critique->lead_company_name,
                    'estimated_revenue_loss' => $critique->estimated_revenue_loss,
                ])
                ->prompt("Summarize the top 3 revenue killers for this business and suggest a fix.");

            echo $response;
        });
    }

    public function chat(Critique $critique)
    {
        $this->authorize('view', $critique);

        $message = request()->input('message');
        
        $leadNurturer = new \App\Services\LeadNurturer();
        $response = $leadNurturer->handleIncomingMessage($critique, $message);

        return response()->json(['response' => $response]);
    }
}
