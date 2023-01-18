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

        for($i = 1; $i<=4; $i++) {
            DB::table('os_status')->insert([
                'no_os_status' =>  $faker->randomElement(['Aberta', 'Pendente', 'Agendamento', 'A caminho', 'Fechada', 'Em atendimento']),
                'tp_status' => $faker->randomElement(['O', 'A']),
                'nu_ordem' => $faker->numberBetween(0, 4),
            ]);
        }
    }
}
