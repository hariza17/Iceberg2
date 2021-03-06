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
	'am.multiselect',
    'ui.calendar',
    'ui.bootstrap.modal',
    'mgo-angular-wizard'
]);

icebergApp.filter('capitalize', function () {
	return function (input) {
		return (!!input) ? input.charAt(0).toUpperCase() : '';
	}
});

icebergApp.provider('modalState', function ($stateProvider) {
    var provider = this;
    this.$get = function () {
        return provider;
    };
    this.state = function (stateName, options) {
        //console.log(options);
        var modalInstance;
        $stateProvider.state(stateName, {
            url: options.url,
            onEnter: function ($uibModal, $state) {
                modalInstance = $uibModal.open(options);
                modalInstance.result['finally'](function () {
                    modalInstance = null;
                    if ($state.$current.name === stateName) {
                        $state.go('^');
                    }
                });
            },
            onExit: function () {
                if (modalInstance) {
                    modalInstance.close();
                }
            },
            data:options.data
        });
    };
});


icebergApp.config(['$stateProvider', '$urlRouterProvider', 'toastrConfig','$locationProvider','modalStateProvider', function ($stateProvider, $urlRouterProvider, toastrConfig,$locationProvider, modalStateProvider) {
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
                    templateUrl: '/js/app/views/programas/detalle.html',
                    controller: 'programaDetalleController'
                })
                .state('main.programas.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/programas/crear.html',
                    controller: 'programaCrearController'
                })  
                .state('main.programas.editar', {
                    url: '/editar/:programaId',
                    templateUrl: '/js/app/views/programas/crear.html',
                    controller: 'programaEditarController'
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
                    templateUrl: '/js/app/views/actividades/detalle.html',
                    controller: 'actividadDetalleController'
                })
                .state('main.actividades.crear', {
                    url: '/crear',
                    templateUrl: '/js/app/views/actividades/crear.html',
                    controller: 'actividadCrearController'
                }).
                state('main.actividades.editar', {
                    url: '/editar/:actividadId',
                    templateUrl: '/js/app/views/actividades/crear.html',
                    controller: 'actividadEditarController'

                })

                //PROGRAMACIONES ROUTES
                .state('main.programacion' , {
                    url: '/programacion',
                    templateUrl: '/js/app/views/programacion/base.html',
                    controller: 'programacionController' 
                });
                /*seccion2
                .state('main.seccion',{
                    url: '/secciones',
                    templateUrl: '/js/app/views/beneficiarios/templates/seccion2.html'
                });*/

                modalStateProvider.state('main.beneficiarios.detalle.seccion', {
                    url: '/ficha-de-informacion',
                    templateUrl: '/js/app/views/beneficiarios/templates/seccion2.html',
                    //controller: '',
                    size: 'lg',
                    windowClass: 'app-modal-window'
                });

                /*
                .state('main.programacion.crear', {
                     url: '/crear',
                    templateUrl: '/js/app/views/programacion/crear.html',
                    controller: 'programacionCrearController'
                })
                .state('main.programacion.detalle',{
                      url: '/detalle/:programacionId',
                    templateUrl: '/js/app/views/programacion/detalle.html',
                    controller: 'programacionDetalleController'
                })
                 .state('main.programacion.editar', {
                    url: '/editar/:programacionId',
                    templateUrl: '/js/app/views/programacion/crear.html',
                    controller: 'programacionEditarController'
                })*/

}]);

icebergApp.run(['$confirmModalDefaults',  '$rootScope',
    function ($confirmModalDefaults, $rootScope) {
       /* var token = window.localStorage.getItem(TOKEN_KEY);
        if (token && !jwtHelper.isTokenExpired(token)) {

            loginService.getaAuthUser().then(function (response) {
                $rootScope.usuario = response.data;
                var permissions = $rootScope.usuario.permissions;
                console.log($rootScope.usuario);
                PermissionStore.defineManyPermissions(permissions, function (permissionName) {
                    return _.include(permissions, permissionName);
                });
                var rol = $rootScope.usuario.rol;
                RoleStore.defineRole(rol, permissions);
            });
        }
        */
    $confirmModalDefaults.templateUrl = 'alertas.html';
    $confirmModalDefaults.defaultLabels.title = 'Mensaje del sistema';
    $confirmModalDefaults.defaultLabels.ok = 'Si';
    $confirmModalDefaults.defaultLabels.cancel = 'No';
}]);
