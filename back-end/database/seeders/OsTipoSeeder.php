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

        for($i = 1; $i<=9; $i++) {
            DB::table('os_tipo')->insert([
                'no_os_tipo' => $faker->randomElement(['CANCELA TRAVADA', 'LEITOR FACIAL', 'LEITOR BIOMÉTRICO']),
                // 'ref_os_tipo' => $faker->realText($maxNbChars = 20, $indexSize = 2),
            ]);
        }
    }
}
