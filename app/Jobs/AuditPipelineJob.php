<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Critique;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AuditPipelineJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(public Critique $critique)
    {
    }

    public function handle(): void
    {
        // Update status to processing
        $this->critique->update(['status' => 'processing']);

        // Step 1: Take screenshots
        TakeScreenshotsJob::dispatch($this->critique);

        // Step 2: Analyze with PageSpeed
        AnalyzePageSpeedJob::dispatch($this->critique);

        // Step 3: Analyze tech stack
        AnalyzeTechStackJob::dispatch($this->critique);
    }
}
