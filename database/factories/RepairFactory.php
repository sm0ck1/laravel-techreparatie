<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Repair>
 */
class RepairFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'              => 1,
            'order_number'         => $this->faker->unique()->numberBetween(100000, 999999),
            'customer_name'        => $this->faker->name(),
            'customer_phone'       => $this->faker->phoneNumber(),
            'device'               => $this->faker->word(),
            'problem_description'  => $this->faker->sentence(),
            'solution_description' => $this->faker->sentence(),
            'component'            => $this->faker->word(),
            'note'                 => $this->faker->sentence(),
            'date'                 => $this->faker->date(),
            'invoice'              => $this->faker->word(),
            'cost'                 => $this->faker->randomFloat(2, 0, 1000),
            'price'                => $this->faker->randomFloat(2, 0, 1000),
            'is_ordered_component' => $this->faker->boolean(),
            'is_called'            => $this->faker->boolean(),
            'is_fixed'             => $this->faker->boolean(),
            'is_picked_up'         => $this->faker->boolean(),

        ];
    }
}
