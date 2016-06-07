<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BeneficiarioPrograma extends Model
{
    protected $table='beneficiarios_programas';
	protected $fillable=['beneficiarios_id','programas_id','periodo_id'];
	public $timestamps = false;
	
	public function benficiario()
    {
		return $this->belongsTo('App\Models\Beneficiario');
    }
	public function programa()
    {
		return $this->belongsTo('App\Models\Programa');
    }
	
	public function periodo()
    {
		return $this->belongsTo('App\Models\Periodo');
    }
	
}
