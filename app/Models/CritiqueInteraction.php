<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CritiqueInteraction extends Model
{
    use HasFactory;

    protected $fillable = [
        'critique_id',
        'sender_type',
        'message',
        'detected_intent',
        'is_streaming',
        'metadata',
    ];

    protected $casts = [
        'metadata' => 'json',
        'is_streaming' => 'boolean',
    ];

    public function critique(): BelongsTo
    {
        return $this->belongsTo(Critique::class);
    }
}
