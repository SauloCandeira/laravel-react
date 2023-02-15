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
        Schema::create('os_resposta', function (Blueprint $table) {
			$table->integer('id_os_resposta', true);
			$table->integer('id_os')->index('ix_fk_os__os_resposta');
            $table->integer('id_os_status')->nullable()->index('ix_fk_os_status__os_resposta');
			$table->integer('id_funcionario')->index('ix_fk_funcionario__os_resposta')->nullable();
            $table->text('ds_os_resposta')->nullable();
            $table->string('no_file')->nullable();
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
        Schema::dropIfExists('os_resposta');
    }
};
