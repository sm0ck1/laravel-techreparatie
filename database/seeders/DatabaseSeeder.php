<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Serhii',
            'email' => 'seregae86@gmail.com',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Test Serhii',
            'email' => 'seregae861@gmail.com',
            'access'=> false
        ]);

        \App\Models\Repair::factory(10)->create();
    }
}
