<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // For SQLite, we need to use a different approach
        if (DB::connection()->getDriverName() === 'sqlite') {
            // Create a new temporary table with all columns
            Schema::create('temp_critiques', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade');
                $table->string('url');
                $table->string('title')->nullable();
                $table->text('description')->nullable();
                $table->integer('score')->nullable();
                $table->json('results')->nullable();
                $table->string('desktop_screenshot')->nullable();
                $table->string('mobile_screenshot')->nullable();
                $table->string('status')->default('pending');
                $table->foreignId('claimed_by')->nullable()->constrained('users')->onDelete('set null');
                $table->string('unique_id')->unique()->nullable();
                $table->timestamp('last_viewed_at')->nullable();
                $table->string('proposed_ui_path')->nullable();
                $table->boolean('is_unlocked')->default(false);
                $table->string('lead_company_name')->nullable();
                $table->decimal('estimated_revenue_loss', 10, 2)->nullable();
                $table->timestamps();
            });

            // Copy data from old table to new table
            DB::statement('INSERT INTO temp_critiques (
                id, user_id, url, title, description, score, results, 
                desktop_screenshot, mobile_screenshot, status, claimed_by, 
                unique_id, last_viewed_at, proposed_ui_path, is_unlocked, 
                lead_company_name, estimated_revenue_loss, created_at, updated_at
            ) SELECT 
                id, user_id, url, title, description, score, results, 
                desktop_screenshot, mobile_screenshot, status, claimed_by, 
                unique_id, last_viewed_at, proposed_ui_path, is_unlocked, 
                lead_company_name, estimated_revenue_loss, created_at, updated_at
            FROM critiques');

            // Drop old table
            Schema::drop('critiques');

            // Rename new table
            Schema::rename('temp_critiques', 'critiques');
        } else {
            // For other databases, use the standard method
            Schema::table('critiques', function (Blueprint $table) {
                $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade')->change();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (DB::connection()->getDriverName() === 'sqlite') {
            // Create a new temporary table
            Schema::create('temp_critiques', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->string('url');
                $table->string('title')->nullable();
                $table->text('description')->nullable();
                $table->integer('score')->nullable();
                $table->json('results')->nullable();
                $table->string('desktop_screenshot')->nullable();
                $table->string('mobile_screenshot')->nullable();
                $table->string('status')->default('pending');
                $table->foreignId('claimed_by')->nullable()->constrained('users')->onDelete('set null');
                $table->string('unique_id')->unique()->nullable();
                $table->timestamp('last_viewed_at')->nullable();
                $table->string('proposed_ui_path')->nullable();
                $table->boolean('is_unlocked')->default(false);
                $table->string('lead_company_name')->nullable();
                $table->decimal('estimated_revenue_loss', 10, 2)->nullable();
                $table->timestamps();
            });

            // Copy data from old table to new table
            DB::statement('INSERT INTO temp_critiques (
                id, user_id, url, title, description, score, results, 
                desktop_screenshot, mobile_screenshot, status, claimed_by, 
                unique_id, last_viewed_at, proposed_ui_path, is_unlocked, 
                lead_company_name, estimated_revenue_loss, created_at, updated_at
            ) SELECT 
                id, user_id, url, title, description, score, results, 
                desktop_screenshot, mobile_screenshot, status, claimed_by, 
                unique_id, last_viewed_at, proposed_ui_path, is_unlocked, 
                lead_company_name, estimated_revenue_loss, created_at, updated_at
            FROM critiques');

            // Drop old table
            Schema::drop('critiques');

            // Rename new table
            Schema::rename('temp_critiques', 'critiques');
        } else {
            // For other databases, use the standard method
            Schema::table('critiques', function (Blueprint $table) {
                $table->foreignId('user_id')->constrained()->onDelete('cascade')->change();
            });
        }
    }
};
