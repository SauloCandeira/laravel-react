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
        Schema::table('os', function(Blueprint $table)
		{
            $table->foreign('id_condominio', 'fk_condominio__os')->references('id_condominio')->on('condominio')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('id_empresa', 'fk_empresa__os')->references('id_empresa')->on('empresa')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('id_os_status', 'fk_os__os_status')->references('id_os_status')->on('os_status')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('id_funcionario', 'fk_funcionario__os')->references('id_funcionario')->on('funcionario')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('id_os_tipo', 'fk_os_tipo__os')->references('id_os_tipo')->on('os_tipo')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});

        Schema::table('os_funcionario', function(Blueprint $table)
		{
            $table->foreign('id_os', 'fk_os__os_funcionario')->references('id_os')->on('os')->onUpdate('RESTRICT')->onDelete('RESTRICT');
            $table->foreign('id_funcionario', 'fk_funcionario__os_funcionario')->references('id_funcionario')->on('funcionario')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
		Schema::table('os', function(Blueprint $table)
		{
            $table->dropForeign('fk_condominio__os');
            $table->dropForeign('fk_empresa__os');
            $table->dropForeign('fk_os__os_status');
			$table->dropForeign('fk_funcionario__os');
			$table->dropForeign('fk_os_tipo__os');
		});

        Schema::table('os_funcionario', function(Blueprint $table)
		{
            $table->dropForeign('fk_os__os_funcionario');

		});
    }
};
