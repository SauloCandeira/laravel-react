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
        Schema::create('funcionario', function (Blueprint $table) {
			$table->integer('id_funcionario', true);
            $table->string('no_funcionario', 100);
            $table->char('tp_funcionario', 1)->default('I');
            $table->integer('id_empresa')->index('ix_fk_empresa__funcionario');
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
        Schema::dropIfExists('funcionario');
    }
};
