/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var icebergApp = angular.module("icebergApp", [
    'ui.router',
	'AppControllers',
	'AppServices',
    'toastr',
    'angular-confirm',
	'ui.bootstrap',
	'angular-click-outside',
	'am.multiselect'
]);

icebergApp.filter('capitalize', function () {
	return function (input) {
		return (!!input) ? input.charAt(0).toUpperCase() : '';
	}
});

icebergApp.config(['$stateProvider', '$urlRouterProvider', 'toastrConfig','$locationProvider', function ($stateProvider, $urlRouterProvider, toastrConfig,$locationProvider) {
	angular.extend(toastrConfig, {
		autoDismiss: false,
		containerId: 'toast-container',
		maxOpened: 0,
		newestOnTop: true,
		positionClass: 'toast-top-right',
		preventDuplicates: false,
		preventOpenDuplicates: false,
		target: 'body'
	});

        $urlRouterProvider.otherwise('/login');

	  $urlRouterProvider.otherwise('/login');

        $stateProvider
                .state('main', {
                    url: '/app',
                    templateUrl: '/js/app/views/main.html',
					controller:'mainController'

                })
                .state('login', {
                    url: '/login',
                    templateUrl: '/js/app/views/login.html'
                }) //ZONAS ROUTES

                .state('main.zonas', {
                    url: '/zona',
                    templateUrl: '/js/app/views/zonas/base.html',
                    controller: 'zonaController'
                })

                .state('main.zonas.detalle', {
                    url: '/detalle/:zonaId',
                    templateUrl: '/js/app/views/zonas/detalle.html',
                    controller: 'zonaDetalleController'
                })
                .state('main.zonas.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/zonas/crear.html',
                    controller: 'zonaCrearController'
                })
                .state('main.zonas.editar', {
                    url: '/editar/:zonaId',
                    templateUrl: '/js/app/views/zonas/crear.html',
                    controller: 'zonaEditarController'
                })


                //BENEFICIARIO ROUTES
                .state('main.beneficiarios', {
                    url: '/beneficiario',
                    templateUrl: '/js/app/views/beneficiarios/base.html',
                    controller: 'beneficiarioController'
                })
                .state('main.beneficiarios.detalle', {
                    url: '/detalle/:beneficiarioId',
                    templateUrl: '/js/app/views/beneficiarios/detalle.html',
                    controller: 'beneficiarioDetalleController'
                })
                .state('main.beneficiarios.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/beneficiarios/crear.html',
                    controller: 'beneficiarioCrearController'
                })
                .state('main.beneficiarios.editar', {
                    url: '/editar/:beneficiarioId',
                    templateUrl: '/js/app/views/beneficiarios/crear.html',
                    controller: 'beneficiarioEditarController'
                })
                

                //PERFILES ROUTES
                .state('main.perfiles', {
                    url: '/perfil',
                    templateUrl: '/js/app/views/perfiles/base.html',
                    controller: 'perfilController'
                })
                .state('main.perfiles.detalle', {
                    url: '/detalle/:perfilId',
                    templateUrl: '/js/app/views/perfiles/crear.html',
                    controller: 'perfilEditarController'
                })
                .state('main.perfiles.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/perfiles/crear.html',
                    controller: 'perfilCrearController'
                })


                //PROGRAMAS ROUTES
                .state('main.programas', {
                    url: '/programa',
                    templateUrl: '/js/app/views/programas/base.html',
                    controller: 'programaController'
                })
                .state('main.programas.detalle', {
                    url: '/detalle/:programaId',
                    templateUrl: '/js/app/views/programas/crear.html',
                    controller: 'programaEditarController'
                })
                .state('main.programas.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/programas/crear.html',
                    controller: 'programaCrearController'
                })

                //OBJETIVOS ROUTES
                .state('main.objetivos', {
                    url: '/objetivo',
                    templateUrl: '/js/app/views/objetivos/base.html',
                    controller: 'objetivoController'
                })
                .state('main.objetivos.detalle', {
                    url: '/detalle/:objetivoId',
                    templateUrl: '/js/app/views/objetivos/crear.html',
                    controller: 'objetivoEditarController'
                })
                .state('main.objetivos.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/objetivos/crear.html',
                    controller: 'objetivoCrearController'
                })

                //INDICADORES ROUTES
                .state('main.indicadores', {
                    url: '/indicador',
                    templateUrl: '/js/app/views/indicadores/base.html',
                    controller: 'indicadorController'
                })
                .state('main.indicadores.detalle', {
                    url: '/detalle/:indicadorId',
                    templateUrl: '/js/app/views/indicadores/crear.html',
                    controller: 'indicadorEditarController'
                })
                .state('main.indicadores.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/indicadores/crear.html',
                    controller: 'indicadorCrearController'
                })

                //ACTIVIDADES ROUTES
                .state('main.actividades', {
                    url: '/actividad',
                    templateUrl: '/js/app/views/actividades/base.html',
                    controller: 'actividadController'
                })
                .state('main.actividades.detalle', {
                    url: '/detalle/:actividadId',
                    templateUrl: '/js/app/views/actividades/crear.html',
                    controller: 'actividadEditarController'
                })
                .state('main.actividades.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/actividades/crear.html',
                    controller: 'actividadCrearController'
                })

}])
