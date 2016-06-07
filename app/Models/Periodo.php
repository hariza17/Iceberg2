<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Periodo extends Model
{
	protected $table = 'periodos';

	protected $fillable=['nombre','descripcion','fecha_inicio','fecha_fin','estado'];

	public $timestamps = false;

	public function consejos_comunitarios()
    {
		return $this->hasMany('App\Models\ConsejoComunitario');
    }
	
	
}