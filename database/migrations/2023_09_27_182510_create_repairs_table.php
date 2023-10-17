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
        Schema::create('repairs', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('order_number')->unique();
            $table->string('customer_name')->nullable();
            $table->string('customer_phone')->nullable();
            $table->string('device');
            $table->text('problem_description');
            $table->text('solution_description');
            $table->text('note')->nullable();
            $table->dateTime('date');
            $table->string('component')->nullable();
            $table->string('invoice')->nullable();
            $table->decimal('cost', 6, 2);
            $table->decimal('price', 6, 2);

            $table->boolean('is_ordered_component')->default(false);
            $table->boolean('is_called')->default(false);
            $table->boolean('is_fixed')->default(false);
            $table->boolean('is_picked_up')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repairs');
    }
};
