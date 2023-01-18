<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;


class OsSeeder extends Seeder
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
            DB::table('os')->insert([

                // Primary Keys
                'id_os_tipo' => $faker->randomElement($ids),
                'id_condominio' =>  $faker->randomElement($ids),
                'id_empresa' =>  $faker->randomElement($ids),
                'id_os_status' =>  $faker->randomElement($ids),
                'id_funcionario' =>  $faker->randomElement($ids),


                'ds_os' => $faker->realText($maxNbChars = 20, $indexSize = 2),
                'ds_os_tecnico' => $faker->realText($maxNbChars = 20, $indexSize = 2),
                'ds_os_solucao' => $faker->realText($maxNbChars = 20, $indexSize = 2),
                'dt_agendamento' => $faker->date('Y_m_d'),
                'nu_prioridade' => $faker->randomElement(['1', '2', '3'])
            ]);
        }
    }
}
