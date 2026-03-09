<?php

namespace App\Events;

use App\Models\Critique;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LighthouseAuditCompleted implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $critique;

    public function __construct(Critique $critique)
    {
        $this->critique = $critique;
        
        // Remove unnecessary data to reduce event size
        if ($this->critique->results) {
            // Only keep the lighthouseResult categories
            $this->critique->results = [
                'lighthouseResult' => [
                    'categories' => $this->critique->results['lighthouseResult']['categories']
                ]
            ];
        }
    }

    public function broadcastOn(): array
    {
        return [
            new Channel("lighthouse.{$this->critique->id}"),
        ];
    }

    public function broadcastAs(): string
    {
        return 'LighthouseAuditCompleted';
    }
}
