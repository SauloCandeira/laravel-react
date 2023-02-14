<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class OsTipoSeeder extends Seeder
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

        for($i = 1; $i<=9; $i++) {
            DB::table('os_tipo')->insert([
                'no_os_tipo' => $faker->randomElement(['Cancela Travada', 'Leitor Facial', 'Leitor Biométrico', 'Atendimento Sindico', 'Automação']),
                'id_empresa' => $faker->randomElement($ids)
                // 'ref_os_tipo' => $faker->realText($maxNbChars = 20, $indexSize = 2),
            ]);
        }
    }
}
