<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
   protected $table = 'empleados';

	protected $fillable=['identificacion','primer_nombre','segundo_nombre','primer_apellido','segundo_apellido','sexo','fecha_nacimiento','direccion','telefono'];


	public $timestamps = false;

	public function usuario()
    {
		return $this->hasMany('App\Models\Usuario');
    }

}
