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

class AnalyzeTechStackJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(public Critique $critique)
    {
    }

    public function handle(): void
    {
        try {
            // Check if URL is valid
            if (empty($this->critique->url) || $this->critique->url === 'new-project.local') {
                logger()->info('Skipping tech stack analysis: Invalid URL for critique ' . $this->critique->id);
                return;
            }

            // This is a simplified version. In a real application, you might use BuiltWith API or other services.
            $response = Http::get($this->critique->url);
            
            if ($response->successful()) {
                $content = $response->body();
                $techStack = $this->analyzeTechStackFromContent($content);
                
                $results = $this->critique->results ?? [];
                $results['tech_stack'] = $techStack;
                
                $this->critique->update([
                    'results' => $results,
                ]);
            }

            // After all jobs are completed, update status to completed
            $this->critique->update(['status' => 'completed']);

        } catch (\Exception $e) {
            logger()->error('Error analyzing tech stack for critique ' . $this->critique->id . ': ' . $e->getMessage());
            $this->critique->update(['status' => 'completed']); // Still mark as completed if one step fails
        }
    }

    private function analyzeTechStackFromContent(string $content): array
    {
        $techStack = [];

        // Check for common technologies
        if (str_contains($content, 'WordPress')) {
            $techStack[] = 'WordPress';
        }
        if (str_contains($content, 'Shopify')) {
            $techStack[] = 'Shopify';
        }
        if (str_contains($content, 'Magento')) {
            $techStack[] = 'Magento';
        }
        if (str_contains($content, 'React')) {
            $techStack[] = 'React';
        }
        if (str_contains($content, 'Vue')) {
            $techStack[] = 'Vue.js';
        }
        if (str_contains($content, 'Angular')) {
            $techStack[] = 'Angular';
        }
        if (str_contains($content, 'Svelte')) {
            $techStack[] = 'Svelte';
        }
        if (str_contains($content, 'jQuery')) {
            $techStack[] = 'jQuery';
        }
        if (str_contains($content, 'Bootstrap')) {
            $techStack[] = 'Bootstrap';
        }

        return $techStack;
    }
}
