<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Critique extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'url',
        'title',
        'description',
        'score',
        'results',
        'desktop_screenshot',
        'mobile_screenshot',
        'status',
        'claimed_by',
        'unique_id',
        'last_viewed_at',
        'proposed_ui_path',
        'is_unlocked',
        'lead_company_name',
        'estimated_revenue_loss',
    ];

    protected $casts = [
        'results' => 'json',
        'last_viewed_at' => 'datetime',
        'is_unlocked' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function claimedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'claimed_by');
    }

    public function items(): HasMany
    {
        return $this->hasMany(CritiqueItem::class);
    }

    public function interactions(): HasMany
    {
        return $this->hasMany(CritiqueInteraction::class);
    }

    public function getServicePackageAttribute(): string
    {
        $score = $this->score ?? 0;

        if ($score >= 0 && $score <= 40) {
            return 'Full Rebuild & Migration to Laravel/Svelte';
        } elseif ($score >= 41 && $score <= 70) {
            return 'UX Overhaul & Performance Optimization';
        } elseif ($score >= 71 && $score <= 90) {
            return 'Retainer-based SEO & Support';
        }

        return 'Unknown';
    }

    public function getScoreCategoryAttribute(): string
    {
        $score = $this->score ?? 0;

        if ($score >= 0 && $score <= 40) {
            return 'Critical';
        } elseif ($score >= 41 && $score <= 70) {
            return 'Average';
        } elseif ($score >= 71 && $score <= 90) {
            return 'Good';
        }

        return 'Unknown';
    }
}
