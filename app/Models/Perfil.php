<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
   	protected $table = 'perfiles';

	protected $fillable=['nombre','descripcion'];

	public $timestamps = false;

	public function acciones()
    {
		return $this->belongsToMany('App\Models\Accion');
    }
}
