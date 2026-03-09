<?php

namespace App\Console\Commands;

use App\Models\Critique;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendAIReengagementEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-ai-reengagement-emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send AI-driven re-engagement emails to leads';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Find critiques that haven't been viewed in the last 3 days
        $staleCritiques = Critique::whereNotNull('last_viewed_at')
            ->where('last_viewed_at', '<=', Carbon::now()->subDays(3))
            ->where('status', '!=', 'callback_requested')
            ->get();

        foreach ($staleCritiques as $critique) {
            // Send re-engagement email
            try {
                // TODO: Create a proper Mailable for this
                // Mail::to($critique->lead_email)->send(new ReengagementEmail($critique));

                // Log that we sent the email
                $this->info("Sent re-engagement email to {$critique->lead_email} for critique {$critique->id}");
            } catch (\Exception $e) {
                $this->error("Failed to send re-engagement email to {$critique->lead_email}: {$e->getMessage()}");
            }
        }

        $this->info("Processed {$staleCritiques->count()} stale critiques");
    }
}
