<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Programa extends Model
{
    protected $table = 'programas';

	protected $fillable=['nombre','descripcion'];

	public $timestamps = false;

	//el nombre de la llave foranea es objetivos_id
	public function objetivos()
    {
		return $this->hasMany('App\Models\Objetivo');
    }

	
	
	public function beneficiario_programa()
    {
		return $this->hasMany('App\Models\BeneficiarioPrograma');
    }
}
