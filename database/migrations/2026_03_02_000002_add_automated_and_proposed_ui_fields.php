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
        // Add is_automated to critique_items
        Schema::table('critique_items', function (Blueprint $table) {
            $table->boolean('is_automated')->default(false);
        });

        // Add proposed_ui_path and is_unlocked to critiques
        Schema::table('critiques', function (Blueprint $table) {
            $table->string('proposed_ui_path')->nullable();
            $table->boolean('is_unlocked')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('critique_items', function (Blueprint $table) {
            $table->dropColumn('is_automated');
        });

        Schema::table('critiques', function (Blueprint $table) {
            $table->dropColumn('proposed_ui_path');
            $table->dropColumn('is_unlocked');
        });
    }
};
