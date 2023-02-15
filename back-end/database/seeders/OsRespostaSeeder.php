<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class OsRespostaSeeder extends Seeder
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
            DB::table('os_resposta')->insert([
                'id_os' => $faker->randomElement($ids),
                'id_funcionario' => $faker->randomElement($ids),
                'ds_os_resposta' => $faker->realText($maxNbChars = 20, $indexSize = 2),
            ]);
        }
    }
}
