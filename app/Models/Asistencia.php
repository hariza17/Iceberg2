<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Asistencia extends Model
{
   	protected $table = 'asistencias';

	protected $fillable=['periodo','presidente','contacto','participantes','estado'];

	public $timestamps = false;

	public function zona()
    {
		return $this->belongsTo('App\Models\Zona');
    }
}
