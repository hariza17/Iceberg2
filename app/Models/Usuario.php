<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';

	protected $fillable=['nombre','contrasena','empleado_id','empleado_id'];

	public $timestamps = false;

	public function empleados()
    {
		return $this->belongsToMany('App\Models\Empleado');
    }

	public function zona()
  	{
		return $this->hasOne('App\Models\Zona');
  	}

	public function perfil()
  	{
		return $this->hasOne('App\Models\Perfil');
  	}

}
