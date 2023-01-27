<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('os_funcionario', function (Blueprint $table) {
			$table->integer('id_os_funcionario', true);
            $table->integer('id_os')->index('ix_fk_os_funcionario__os');
            $table->integer('id_funcionario')->index('ix_fk_funcionario__os_funcionario');
            $table->dateTime('dt_inicio')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->dateTime('dt_fim')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('os_funcionario');
    }
};
