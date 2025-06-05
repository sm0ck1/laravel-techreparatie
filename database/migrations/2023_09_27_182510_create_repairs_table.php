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
            $table->bigInteger('user_id')->unsigned()->nullable();

            $table->string('customer_name')->nullable();
            $table->string('customer_phone')->nullable();

            $table->string('device')->nullable();
            $table->text('problem_description')->nullable();
            $table->string('component')->nullable();
            $table->text('note')->nullable();

            $table->string('invoice')->nullable();
            $table->decimal('cost', 10, 2);
            $table->decimal('price', 10, 2);

            $table->boolean('is_ordered_component')->default(false);
            $table->string('where_ordered')->nullable();
            $table->bigInteger('who_ordered_id')->unsigned()->nullable();
            $table->dateTime('date_ordered')->nullable();

            $table->boolean('is_called')->default(false);
            $table->dateTime('date_called')->nullable();

            $table->boolean('is_fixed')->default(false);
            $table->text('solution_description')->nullable();
            $table->dateTime('date_fixed')->nullable();

            $table->boolean('is_picked_up')->default(false);
            $table->dateTime('date_picked_up')->nullable();

            $table->boolean('is_diagnostic')->default(false);
            $table->text('diagnostic_description')->nullable();
            $table->dateTime('date_diagnostic')->nullable();

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
