<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Database\Seeders\OsFuncionarioSeeder;
use Database\Seeders\EmpresaSeeder;
use Database\Seeders\FuncionarioSeeder;
use Database\Seeders\CondominioSeeder;
use Database\Seeders\OsStatusSeeder;
use Database\Seeders\OsTipoSeeder;
use Database\Seeders\OsSeeder;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([EmpresaSeeder::class]);
        $this->call([FuncionarioSeeder::class]);
        $this->call([CondominioSeeder::class]);
        $this->call([OsStatusSeeder::class]);
        $this->call([OsTipoSeeder::class]);
        $this->call([OsSeeder::class]);
        $this->call([OsSeeder::class]);
        $this->call([OsFuncionarioSeeder::class]);
    }
}
