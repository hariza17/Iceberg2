<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableIndicadores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('indicadores', function (Blueprint $table) {
            $table->bigIncrements('id');
			$table->string('nombre');
			$table->string('descripcion');
			$table->timestamps();
        });
	}

    /**
     * Reverse the migrations.
     *
     * @return void
     */


    public function down()
    {
       Schema::drop('indicadores');
    }
}
