<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Programacion extends Model
{
    protected $table = 'programaciones';

	protected $fillable=['fecha_inicio','fecha_fin','estado','observaciones','actividad_id','zona_id'];

	public $timestamps = false;

	public function actividad()
    {
		return $this->hasOne('App\Models\Actividad');
    }

	public function zona()
    {
		return $this->hasOne('App\Models\Zona');
    }

	public function evaluaciones()
    {
        return $this->hasMany('App\Models\Evaluacion');
    }
}
