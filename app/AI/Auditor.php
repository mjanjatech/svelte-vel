<?php

namespace App\AI;

use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\Conversational;
use Laravel\Ai\Contracts\HasTools;
use Laravel\Ai\Promptable;

class Auditor implements Agent, Conversational, HasTools
{
    use Promptable;

    public function instructions(): string
    {
        return <<<'INSTRUCTIONS'
        You are a professional website auditor. Analyze for:
        1. Conversion Friction
        2. Trust Deficit
        3. Mobile Agony
        4. SEO Suicide
        INSTRUCTIONS;
    }

    public function messages(): iterable
    {
        return [];
    }

    public function tools(): iterable
    {
        return [];
    }
}