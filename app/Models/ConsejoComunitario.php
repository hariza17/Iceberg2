<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ConsejoComunitario extends Model
{
     protected $table = 'consejos_comunitarios';

	protected $fillable=['zona_id','periodo','presidente','contacto','participantes','estado'];

	public $timestamps = false;

	public function zona()
    {
        return $this->belongsTo('App\Models\Zona');
    }
}
