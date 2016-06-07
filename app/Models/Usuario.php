<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;


class Usuario extends Model  implements AuthenticatableContract,
                                    AuthorizableContract
                                    
{
	use Authenticatable, Authorizable;
										
    protected $table = 'usuarios';

	protected $fillable=['usuario','password','empleado_id'];

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
