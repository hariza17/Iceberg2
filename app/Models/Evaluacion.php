<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evaluacion extends Model
{
    protected $table = 'evaluaciones';

	protected $fillable=['valor','objetivos_has_indicadores_id'];

	public $timestamps = false;

	public function programacion()
    {
        return $this->belongsTo('App\Models\programacion');
    }
}
