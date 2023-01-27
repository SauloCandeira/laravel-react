<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class OsStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        $tipos = ['Fechada', 'Pendente', 'Agendamento', 'Em atendimento', 'A caminho', 'Aberta'];

        for($i = 0; $i<=5; $i++) {


            DB::table('os_status')->insert([
                'no_os_status' => $tipos[$i],
                'tp_status' => $faker->randomElement(['O', 'A']),
                'nu_ordem' => $faker->numberBetween(0, 4),
            ]);
        }
    }
}
