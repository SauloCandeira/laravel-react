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
        Schema::create('os_tipo', function (Blueprint $table) {
			$table->integer('id_os_tipo', true);
			$table->integer('id_empresa')->index('ix_fk_empresa__os_tipo');
			$table->string('no_os_tipo', 100)->nullable();
			$table->string('ref_os_tipo', 100)->nullable();
            $table->boolean('is_envia_email')->default(true);
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
        Schema::dropIfExists('os_tipo');
    }
};
