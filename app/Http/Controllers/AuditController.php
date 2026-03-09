<?php

// app/Http/Controllers/AuditController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Process\Process;
use App\Jobs\AnalyzePageSpeedJob;
use App\Jobs\SeoCheckerJob;
use App\Models\Critique;

class AuditController extends Controller
{
    public function scrape(Request $request)
    {
        $request->validate(['url' => 'required|url']);
        $url = $request->url;

        // Create a temporary critique to store the results
        $critique = Critique::create([
            'url' => $url,
            'user_id' => null, // For guest users
            'status' => 'processing',
            'score' => null,
            'results' => null,
            'seo_status' => 'processing',
            'seo_score' => null,
            'seo_results' => null,
        ]);

        // Dispatch the SEO checker job
        SeoCheckerJob::dispatch($critique);

        return response()->json(['message' => 'SEO check started', 'id' => $critique->id]);
    }

    public function seoStatus(Request $request, $id)
    {
        $critique = Critique::findOrFail($id);

        return response()->json([
            'id' => $critique->id,
            'url' => $critique->url,
            'seo_status' => $critique->seo_status,
            'seo_score' => $critique->seo_score,
            'seo_results' => $critique->seo_results,
        ]);
    }

    public function analyzePageSpeed(Request $request)
    {
        $request->validate(['url' => 'required|url']);
        $url = $request->url;

        // Create a temporary critique to store the results
        $critique = Critique::create([
            'url' => $url,
            'user_id' => null, // For guest users
            'status' => 'processing',
            'score' => null,
            'results' => null,
        ]);

        // Dispatch the job to analyze the page speed
        AnalyzePageSpeedJob::dispatch($critique);

        return response()->json(['message' => 'Analysis started', 'id' => $critique->id]);
    }

    public function status(Request $request, $id)
    {
        $critique = Critique::findOrFail($id);

        return response()->json([
            'id' => $critique->id,
            'url' => $critique->url,
            'status' => $critique->status,
            'score' => $critique->score,
            'results' => $critique->results,
        ]);
    }
}