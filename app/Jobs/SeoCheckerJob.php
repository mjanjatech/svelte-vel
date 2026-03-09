<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Critique;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Symfony\Component\Process\Process;

class SeoCheckerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Set a high timeout as Puppeteer can be resource-intensive.
     */
    public $timeout = 120;

    public function __construct(public Critique $critique)
    {
    }

    public function handle(): void
    {
        // 1. Update status specifically for SEO
        $this->critique->update(['seo_status' => 'processing']);

        try {
            // 2. Execute the Node.js Puppeteer script
            $process = new Process([
                'node', 
                base_path('scripts/seo-scraper.js'), 
                $this->critique->url
            ]);
            
            $process->run();

            if (!$process->isSuccessful()) {
                throw new \Exception("Puppeteer failed: " . $process->getErrorOutput());
            }

            $data = json_decode($process->getOutput(), true);

            // 3. Calculate an independent SEO Score (0-100)
            $score = $this->calculateInternalScore($data);

            // 4. Save results to their own dedicated columns
            $this->critique->update([
                'seo_score' => $score,
                'seo_results' => $data, // Store JSON of meta tags, H1s, etc.
                'seo_status' => 'completed'
            ]);

            // Dispatch event
            event(new \App\Events\SeoAuditCompleted($this->critique));

        } catch (\Exception $e) {
            $this->critique->update(['seo_status' => 'failed']);
            logger()->error("SEO Audit Error [ID {$this->critique->id}]: " . $e->getMessage());

            // Dispatch event with failure
            event(new \App\Events\SeoAuditCompleted($this->critique));
        }
    }

    private function calculateInternalScore(array $data): int
    {
        $points = 100;

        if (empty($data['title'])) $points -= 25;
        if (empty($data['description'])) $points -= 20;
        if (($data['h1Count'] ?? 0) === 0) $points -= 20;
        if (($data['h1Count'] ?? 0) > 1) $points -= 10;
        if (($data['imagesWithoutAlt'] ?? 0) > 0) $points -= 15;
        if (!($data['isMobileFriendly'] ?? false)) $points -= 10;

        return max(0, $points);
    }
}