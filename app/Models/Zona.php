<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Zona extends Model
{
    protected $table = 'zonas';

	protected $fillable=['nombre','descripcion','consejo_comunitario_id'];

	public $timestamps = false;


	public function beneficiarios()
    {
		return $this->hasMany('App\Models\Beneficiario');
    }
	public function consejo_comunitario()
    {
		return $this->hasMany('App\Models\ConsejoComunitario');
    }
}
