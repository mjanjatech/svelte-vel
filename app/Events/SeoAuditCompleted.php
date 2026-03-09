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

class SeoAuditCompleted implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $critique;

    /**
     * Create a new event instance.
     */
    public function __construct(Critique $critique)
    {
        $this->critique = $critique;
        
        // Remove unnecessary data to reduce event size
        // For SEO results, the data is already small, but we can still limit it if needed
        // If screenshots are too large, we could remove them, but they're needed for the UI
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('seo.' . $this->critique->id),
        ];
    }

    /**
     * The event's broadcast name.
     */
    public function broadcastAs(): string
    {
        return 'SeoAuditCompleted';
    }
}
