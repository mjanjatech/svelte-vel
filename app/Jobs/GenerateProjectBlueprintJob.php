<?php

namespace App\Jobs;

use App\Models\Critique;
use App\Models\CritiqueItem;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Laravel\Ai\Ai;

class GenerateProjectBlueprintJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The critique instance.
     *
     * @var \App\Models\Critique
     */
    public $critique;

    /**
     * Create a new job instance.
     *
     * @param  \App\Models\Critique  $critique
     * @return void
     */
    public function __construct(Critique $critique)
    {
        $this->critique = $critique;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            // Analyze competitor if provided
            if ($this->critique->url !== 'new-project.local') {
                AuditPipelineJob::dispatch($this->critique);
            }

            // Generate project blueprint using AI
            $response = \App\AI\Auditor::make()
                ->prompt("Create a comprehensive project blueprint for a new business in the {$this->critique->title} industry with the vision: {$this->critique->description}.");
            
            $blueprint = $response->text;

            // Parse blueprint into critique items
            $this->parseBlueprint($blueprint);

            // Update critique status
            $this->critique->update(['status' => 'draft']);

            // Dispatch the event to notify the frontend
            // Truncate blueprint if it's too large for Pusher payload
            $truncatedBlueprint = strlen($blueprint) > 5000 ? substr($blueprint, 0, 5000) . '...' : $blueprint;
            \App\Events\ProjectBlueprintGenerated::dispatch($this->critique->id, $truncatedBlueprint);
        } catch (\Exception $e) {
            logger()->error('Error generating project blueprint for critique ' . $this->critique->id . ': ' . $e->getMessage());
            $this->critique->update(['status' => 'draft']); // Still mark as draft if there's an error
        }
    }

    /**
     * Parse the blueprint into critique items.
     *
     * @param  string  $blueprint
     * @return void
     */
    protected function parseBlueprint(string $blueprint)
    {
        // Split blueprint into sections
        $sections = explode("\n\n", $blueprint);
        
        foreach ($sections as $section) {
            // Check if section is a pain point
            if (str_contains(strtolower($section), 'conversion friction') || 
                str_contains(strtolower($section), 'trust deficit') || 
                str_contains(strtolower($section), 'mobile agony') || 
                str_contains(strtolower($section), 'seo suicide')) {
                
                // Determine category
                $category = 'general';
                if (str_contains(strtolower($section), 'conversion friction')) {
                    $category = 'conversion_friction';
                } elseif (str_contains(strtolower($section), 'trust deficit')) {
                    $category = 'trust_deficit';
                } elseif (str_contains(strtolower($section), 'mobile agony')) {
                    $category = 'mobile_agony';
                } elseif (str_contains(strtolower($section), 'seo suicide')) {
                    $category = 'seo_suicide';
                }

                // Create critique item
                CritiqueItem::create([
                    'critique_id' => $this->critique->id,
                    'category' => $category,
                    'comment' => $section,
                    'is_automated' => true,
                ]);
            }
        }
    }
}
