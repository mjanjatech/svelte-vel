<?php

namespace App\Jobs;

use App\Events\RoastCompleted;
use App\Models\Critique;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Laravel\Ai\Ai;

class GenerateRoastJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public Critique $critique)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            Log::debug('Generating roast for critique: ' . $this->critique->id);
            
            // Take screenshots first
            \App\Jobs\TakeScreenshotsJob::dispatchSync($this->critique);
            
            // Generate a real roast using AI
            $roast = $this->generateRealRoast();
            
            // Dispatch the event to notify the frontend
            RoastCompleted::dispatch($this->critique->id, $roast);
            
            Log::debug('Roast completed and event dispatched for critique: ' . $this->critique->id);
        } catch (\Exception $e) {
            Log::error('Error generating roast: ' . $e->getMessage());
        }
    }
    
    /**
     * Generate a real roast using AI
     */
 private function generateRealRoast(): string
{
    $url = $this->critique->url;
    
    $screenshotPath = storage_path('app/public/screenshots/' . $this->critique->id . '_desktop.png');
    $attachments = file_exists($screenshotPath) ? [new \Laravel\Ai\Files\LocalImage($screenshotPath, 'image/png')] : [];

    $response = \App\AI\Auditor::make()
        ->prompt(<<<PROMPT
            Analyze the attached screenshot of {$url} and provide a balanced but sharp critique using this specific format:

            ### THE WINS
            Identify 1-2 things that actually work. If everything is terrible, mock the effort (e.g., "At least the logo is legible, barely."). If it's genuinely good, explain why it's effective.

            ### THE LOSSES
            Brutally identify the major design crimes, usability hurdles, or "Conversion Friction" visible in the layout. Be specific about the visual hierarchy, color choices, or confusing navigation.

            ### THE VERDICT
            Provide a 1-sentence summary that captures the essence of this site's digital existence.

            **Tone Guide:** - Brutally honest but intellectually grounded. 
            - Use technical terms (Visual Hierarchy, Whitespace, Call-to-Action) to justify your insults.
            - Keep the total response concise (2-3 short paragraphs total).
            PROMPT, $attachments);

    return $response->text ?: "The AI is currently filing for digital restraining order against this UI. Try again.";
}
}
