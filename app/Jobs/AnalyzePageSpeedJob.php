<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Critique;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;

class AnalyzePageSpeedJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(public Critique $critique)
    {
    }

    public function handle(): void
    {
        try {
            $apiKey = config('services.pagespeed.key');
            $response = Http::timeout(600)->get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed', [
                'url' => $this->critique->url,
                'key' => $apiKey,
            ]);

            if ($response->successful()) {
                $results = $response->json();
                $score = $results['lighthouseResult']['categories']['performance']['score'] * 100;

                $this->critique->update([
                    'score' => $score,
                    'results' => $results,
                    'status' => 'completed',
                ]);

                // Dispatch event
                event(new \App\Events\LighthouseAuditCompleted($this->critique));
            } else {
                $this->critique->update([
                    'status' => 'failed',
                ]);

                // Dispatch event with failure
                event(new \App\Events\LighthouseAuditCompleted($this->critique));
            }

        } catch (\Exception $e) {
            logger()->error('Error analyzing PageSpeed for critique ' . $this->critique->id . ': ' . $e->getMessage());
            $this->critique->update([
                'status' => 'failed',
            ]);

            // Dispatch event with failure
            event(new \App\Events\LighthouseAuditCompleted($this->critique));
        }
    }
}
