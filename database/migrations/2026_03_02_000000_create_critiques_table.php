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
        Schema::create('critiques', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('url');
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->integer('score')->nullable();
            $table->json('results')->nullable();
            $table->string('desktop_screenshot')->nullable();
            $table->string('mobile_screenshot')->nullable();
            $table->string('status')->default('pending'); // pending, processing, completed, draft
            $table->foreignId('claimed_by')->nullable()->constrained('users')->onDelete('set null');
            $table->string('unique_id')->unique()->nullable();
            $table->timestamp('last_viewed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('critiques');
    }
};
