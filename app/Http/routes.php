<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'PagesController@index');


Route::group(['prefix' => 'api'], function() {

    Route::post('login', 'ApiAuthController@authenticate');
    Route::resource('login', 'ApiAuthController', ['only' => ['index']]);

    Route::resource('accion', 'AccionController');
    Route::resource('actividad', 'ActividadController');
    Route::resource('asistencia', 'AsistenciaController');
    Route::resource('beneficiario', 'BeneficiarioController');
    Route::resource('consejo_comunitario', 'ConsejoComunitarioController');
    Route::resource('empleado', 'EmpleadoController');
    Route::resource('evaluacion', 'EvaluacionController');
    Route::resource('indicador', 'IndicadorController');
    Route::resource('objetivo', 'ObjetivoController');
    Route::resource('perfil', 'PerfilController');
    Route::resource('programa', 'ProgramaController');
    Route::resource('programacion', 'ProgramacionController');
    Route::resource('usuario', 'UsuarioController');
    Route::resource('zona', 'ZonaController');
});


