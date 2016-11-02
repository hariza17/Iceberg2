/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var controllerModule = angular.module('AppControllers');

controllerModule
        .controller('actividadController', ['$scope', 'actividadService',
            '$stateParams', '$rootScope','$confirm', 'toastr',
            function ($scope, actividadService, $stateParams, $rootScope, $confirm, toastr) {

                $rootScope.actividades = [];
                $rootScope.getAllActividades = function (){
                  actividadService.getAllActividad().then(function (response){
                    $rootScope.actividades = response.data;
                    console.log(response.data);
                  });
                };
                   $rootScope.getAllActividades();

                $scope.barra = function () {
                $rootScope.titulo = "NO"; 
                  console.log("titulo");
                };   

                $scope.remove = function (id){
                $confirm({text:'¿Seguro que desea eliminar?'}).then(function(){
                    actividadService.deleteActividad(id).then(function(response){
                        toastr.warning('Éxito', 'beneficiario eliminado');
                        $rootScope.getAllActividades();
                        //hacerlo con lodash 
                        });
                });
            };


            }])
        .controller('actividadCrearController', ['$scope', 'actividadService', 'programaService', '$stateParams', '$location', 'toastr', '$rootScope',
            function ($scope, actividadService, programaService, $stateParams, $location, toastr, $rootScope) {
                $rootScope.titulo = "Crear nueva actividad";
                $scope.boton = "Guardar";

                  $scope.getAllProgramas = function () {
                    programaService.getAllPrograma().then(function (response) {
                      $scope.programas = response.data;
                    });
                  };

                  $scope.getAllProgramas();

                $scope.guardar = function () {
                    console.log($scope.actividad);
                    actividadService.createActividad($scope.actividad).then(function () {
                        $rootScope.getAllActividades();
                        $scope.actividad = {};
                        toastr.success('Exito', 'Actividad creada.');
                    }, function (error){
                        toastr.warning('Error', 'Actividad no creada.');
                    });

                };

            }])
        .controller('actividadEditarController', ['$scope', 'actividadService', 'programaService', '$stateParams', '$location', 'toastr', '$rootScope',
            function ($scope, actividadService, programaService, $stateParams, $location, toastr, $rootScope) {
                $scope.titulo = "Editar actividad";
                $scope.boton = "Actualizar";

                  $scope.getAllProgramas = function () {
                    programaService.getAllPrograma().then(function (response) {
                      $scope.programas = response.data;
                    });
                  };

                  $scope.getAllProgramas();


                $scope.getActividad = function (actividadId) {
                    actividadService.getActividadById(actividadId).then(function successCallBack(response) {
                        $scope.actividad = response.data;
                    }, function errorCallBack(response) {
                        $location.path('/app/actividad');
                    });
                };

                $scope.getActividad(parseInt($stateParams.actividadId));
           

                programaService.getAllPrograma().then(function (response) {
                    $scope.programas = response.data;
                });

                $scope.guardar = function () {
//                
                    actividadService.updateActividad($scope.actividad.id, $scope.actividad).then(function (response) {
                        actividadService.getAllActividad().then(function(response2){
                                $rootScope.actividades = response2.data;
                                $rootScope.getAllActividades();
                                toastr.success('Exito', 'Actividad actualizado');
                                $location.path('/app/actividad');
                        
                        });
                    });
                };

            }])
        .controller ('actividadDetalleController',['$scope', 'actividadService', 'programaService', '$stateParams', '$location', 'toastr', '$rootScope',
            function ($scope, actividadService, programaService, $stateParams, $location, toastr, $rootScope) {
                $rootScope.titulo= "detalle Actividad";

                $scope.detalleActividad = function (actividadId){
                    actividadService.getActividadById(actividadId).then (function successCallBack(response){
                        $scope.actividad = response.data;
                        //console.log("respuesta" + $scope.beneficiario);
                    }, function errorCallBack(response){
                        console.log(response);
                        $location.path('/app/actividad');
                    });
                };

            $scope.detalleActividad(parseInt($stateParams.actividadId));


            }])
      
