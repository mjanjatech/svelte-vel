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
        Schema::table('critiques', function (Blueprint $table) {
            $table->string('lead_company_name')->nullable();
            $table->decimal('estimated_revenue_loss', 10, 2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('critiques', function (Blueprint $table) {
            $table->dropColumn('lead_company_name');
            $table->dropColumn('estimated_revenue_loss');
        });
    }
};
