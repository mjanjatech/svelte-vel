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
        Schema::create('critique_interactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('critique_id')->constrained()->onDelete('cascade');
            
            // Who is talking? 'ai', 'lead', or 'agent' (you)
            $table->enum('sender_type', ['ai', 'lead', 'agent']);
            
            $table->text('message');
            
            // Logic: 'intent' helps the AI categorize the lead's warmth
            // e.g., 'technical_question', 'pricing_inquiry', 'objection'
            $table->string('detected_intent')->nullable();
            
            // For Svelte 5 streaming: track if the AI is still "typing"
            $table->boolean('is_streaming')->default(false);
            
            $table->json('metadata')->nullable(); // Store technical data or AI tokens used
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('critique_interactions');
    }
};
