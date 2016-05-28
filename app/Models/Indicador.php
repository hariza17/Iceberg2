<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Indicador extends Model
{
    protected $table = 'indicadores';

	protected $fillable=['nombre','descripcion'];
	public $timestamps = false;

	//el nombre de la llave foranea es objetivos_id
	public function objetivos()
    {
		return $this->belongsToMany('App\Models\Objetivo','objetivos_indicadores');
    }
}
