<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Objetivo extends Model
{
    protected $table = 'objetivos';

	protected $fillable=['nombre','descripcion'];

	public $timestamps = false;


	//el nombre de la llave foranea es indicadores_id
	public function indicadores()
    {
		return $this->belongsToMany('App\Models\Indicador','objetivos_indicadores');
    }

	public function programa()
    {
        return $this->belongsTo('App\Models\Programa');
    }
}
