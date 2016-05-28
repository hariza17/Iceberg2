<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Beneficiario extends Model
{
    protected $table = 'beneficiarios';

	protected $fillable=['zona_id','identificacion','primer_nombre','segundo_nombre','primer_apellido','segundo_apellido','sexo','fecha_nacimiento','direccion','barrio','telefono','datos_ficha'];

	public $timestamps = false;

	public function zona()
    {
        return $this->belongsTo('App\Models\Zona');
    }

	public function programas()
    {
		return $this->belongsToMany('App\Models\Programa');
    }


}
