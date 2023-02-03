<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class EmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        for($i = 1; $i<=10; $i++) {
            DB::table('empresa')->insert([
                'no_empresa' =>  $faker->company(),
            ]);
        }
    }
}
