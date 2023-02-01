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

        $ids = [1,2,3,4];


        for($i = 1; $i<=4; $i++) {
            DB::table('funcionario')->insert([
                'no_funcionario' =>  $faker->randomElement(['Roberto', 'Rodrigo', 'Vitor', 'Benjamin', 'Thiago', 'Diego']),
                'id_empresa' => $faker->randomElement($ids),
                'tp_funcionario' => $faker->randomElement(['I', 'E'])
            ]);
        }
    }
}
