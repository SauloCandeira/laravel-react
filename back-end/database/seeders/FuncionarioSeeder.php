<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class FuncionarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        for($i = 1; $i<=4; $i++) {
            DB::table('funcionario')->insert([
                'no_funcionario' =>  $faker->randomElement(['Roberto', 'Rodrigo', 'Vitor']),

            ]);
        }
    }
}
