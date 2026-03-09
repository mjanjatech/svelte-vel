<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CritiqueItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'critique_id',
        'category',
        'comment',
        'coordinates',
        'is_automated',
    ];

    protected $casts = [
        'coordinates' => 'json',
        'is_automated' => 'boolean',
    ];

    public function critique(): BelongsTo
    {
        return $this->belongsTo(Critique::class);
    }

    public function getCategoryLabelAttribute(): string
    {
        $categories = [
            'conversion_friction' => 'Conversion Friction',
            'trust_deficit' => 'Trust Deficit',
            'mobile_agony' => 'Mobile Agony',
            'seo_suicide' => 'SEO Suicide',
        ];

        return $categories[$this->category] ?? $this->category;
    }
}
