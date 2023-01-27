<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;


class OsFuncionarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ids = [1,2,3,4];

        $faker = Factory::create();

        for($i = 1; $i<=4; $i++) {
            DB::table('os_funcionario')->insert([
                'id_os' => $faker->randomElement($ids),
                'id_funcionario' => $faker->randomElement($ids),
            ]);
        }
    }
}
