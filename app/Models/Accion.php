<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Accion extends Model
{
    protected $table = 'Acciones';

	protected $fillable=['nombre','etiqueta'];

	public $timestamps = false;

	public function perfiles()
    {
		return $this->belongsToMany('App\Models\Perfil');
    }


}
