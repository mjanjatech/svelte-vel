<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Jobs\GenerateProjectBlueprintJob;
use App\Models\Critique;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GuestBlueprintController extends Controller
{
    public function blueprint()
    {
        return Inertia::render('GuestBlueprint');
    }

    public function start(Request $request)
    {
        $request->validate([
            'description' => 'required|string|min:10',
        ]);

        $critique = Critique::create([
            'description' => $request->description,
            'unique_id' => Str::uuid(),
            'status' => 'guest_draft',
            'is_unlocked' => false,
        ]);

        // Dispatch job to generate project blueprint
        GenerateProjectBlueprintJob::dispatch($critique);

        session(['active_guest_blueprint' => $critique->unique_id]);

        return redirect()->route('blueprint.guest.show', $critique->unique_id);
    }

    public function showDetails($uniqueId)
    {
        $critique = Critique::where('unique_id', $uniqueId)->firstOrFail();

        return Inertia::render('GuestBlueprintShow', [
            'critique' => $critique,
        ]);
    }
}
