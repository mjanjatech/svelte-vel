<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('critique_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('critique_id')->constrained()->onDelete('cascade');
            $table->string('category'); // conversion_friction, trust_deficit, mobile_agony, seo_suicide
            $table->text('comment');
            $table->json('coordinates')->nullable(); // {x: 0-100, y: 0-100}
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('critique_items');
    }
};
