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
        Schema::create('os', function (Blueprint $table) {
			$table->integer('id_os', true);
			$table->integer('id_condominio')->index('ix_fk_condominio__os');
            $table->integer('id_empresa')->index('ix_fk_empresa__os');
			$table->integer('id_os_status')->index('ix_fk_os__os_status');
			$table->integer('id_funcionario')->index('ix_fk_funcionario__os');
			$table->integer('id_os_tipo')->index('ix_fk_os_tipo__os');
            // $table->integer('id_fornecedor')->nullable();
            $table->text('ds_os')->nullable();
            $table->text('ds_os_tecnico')->nullable();
            $table->text('ds_os_solucao')->nullable();
            // $table->integer('id_fornecedor_funcionario')->nullable();
            $table->integer('nu_prioridade')->default(1);
            $table->dateTime('dt_agendamento')->nullable();
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
        Schema::dropIfExists('os');
    }
};
