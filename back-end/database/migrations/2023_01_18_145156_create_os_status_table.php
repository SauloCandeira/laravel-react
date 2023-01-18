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
        Schema::create('os_status', function (Blueprint $table) {
			$table->integer('id_os_status', true);
			$table->string('no_os_status', 100)->nullable();
			$table->string('ref_os_status', 100)->nullable();
            $table->char('tp_status', 1)->default('O');
            $table->string('no_controle', 255)->nullable();
            $table->integer('nu_ordem')->nullable();
            $table->boolean('is_resposta_obrigatoria')->default(true);
            $table->dateTime('dt_inicio')->nullable()->default(DB::raw('CURRENT_TIMESTAMP'));
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
        Schema::dropIfExists('os_status');
    }
};
