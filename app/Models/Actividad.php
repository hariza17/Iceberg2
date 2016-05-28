<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    protected $table = 'actividades';

	protected $fillable=['nombre','descipcion','programa_id'];

	public $timestamps = false;

	public function programa()
    {
		return $this->hasOne('App\Models\Programa');
    }


}
