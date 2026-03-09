<?php

namespace App\Services;

use App\Models\Critique;
use App\Models\CritiqueInteraction;
use Laravel\Ai\Ai;

class LeadNurturer
{
    public function handleIncomingMessage(Critique $critique, string $userMessage)
    {
        // 1. Log the user's message
        $interaction = $critique->interactions()->create([
            'sender_type' => 'lead',
            'message' => $userMessage,
        ]);

        // 2. Use AI to detect "Buy Signal" and potentially trigger tools
        $response = Ai::assistant('sales_closer')
            ->withContext([
                'site_url' => $critique->url,
                'current_score' => $critique->score,
                'proposed_package' => $critique->service_package,
                'lead_company_name' => $critique->lead_company_name,
                'estimated_revenue_loss' => $critique->estimated_revenue_loss,
            ])
            ->prompt($userMessage);

        // 3. Logic: If the AI detects high intent, trigger a 'Hot Lead' notification to you
        $intent = $this->detectIntent($response);
        if ($intent === 'pricing_inquiry') {
            // \App\Notifications\HotLeadAlert::send($critique);
        }
        
        // Check if we should unlock the critique or request a callback based on intent
        if ($intent === 'positive_response') {
            $critique->update(['is_unlocked' => true]);
        } elseif ($intent === 'pricing_inquiry') {
            $critique->update(['status' => 'callback_requested']);
        }

        // 4. Log the AI response
        $critique->interactions()->create([
            'sender_type' => 'ai',
            'message' => $response,
            'detected_intent' => $intent,
        ]);

        return $response;
    }

    protected function detectIntent(string $response): ?string
    {
        // Use AI to predict structured intent
        try {
            $analysis = Ai::predict([
                'intent' => 'string', // 'pricing_inquiry', 'technical_question', 'positive_response', 'objection', 'general_inquiry'
                'sentiment' => 'string', // 'frustrated', 'curious', 'ready_to_buy', 'neutral', 'negative'
                'response' => 'string'
            ])->prompt("Analyze the following user message from a potential lead about their website critique:\n\n\"{$response}\"\n\nDetermine the intent and sentiment. Use the following intent categories:\n- pricing_inquiry: Asking about costs, prices, or budget\n- technical_question: Asking about technical details, code, or development\n- positive_response: Expressing interest, agreement, or readiness to proceed\n- objection: Expressing refusal, lack of interest, or concerns\n- general_inquiry: Any other type of message\n\nFor sentiment, use one of: frustrated, curious, ready_to_buy, neutral, negative\n\nReturn the analysis in JSON format with 'intent', 'sentiment', and 'response' fields.");
            
            return $analysis->intent ?? null;
        } catch (\Exception $e) {
            // Fallback to keyword matching if AI fails
            $lowerResponse = strtolower($response);

            if (str_contains($lowerResponse, 'cost') || str_contains($lowerResponse, 'price') || str_contains($lowerResponse, 'quote')) {
                return 'pricing_inquiry';
            }

            if (str_contains($lowerResponse, 'technical') || str_contains($lowerResponse, 'how') || str_contains($lowerResponse, 'work')) {
                return 'technical_question';
            }

            if (str_contains($lowerResponse, 'expensive') || str_contains($lowerResponse, 'too much') || str_contains($lowerResponse, 'cheaper')) {
                return 'objection';
            }

            return null;
        }
    }
}
