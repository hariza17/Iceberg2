/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var controllerModule = angular.module('AppControllers');

controllerModule
        .controller('actividadController', ['$scope', 'actividadService',
            '$stateParams', '$rootScope', 'uiCalendarConfig',
            function ($scope, actividadService, $stateParams, $rootScope, uiCalendarConfig) {
                 $scope.SelectedEvent = null;
                 var date = new Date();
                    var d = date.getDate();
                    var m = date.getMonth();
                    var y = date.getFullYear();

                $scope.events = [
                      {id: 1 , title: 'Actividad en Bayunca',start: new Date(y, m, 1)},
                      {id: 2, title: 'Todo el día',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
                      {id: 999,title: 'evento 1',start: new Date(y, m, d - 3, 16, 0),allDay: false},
                      {id: 999,title: 'evento 1',start: new Date(y, m, d + 4, 16, 0),allDay: false},
                      {id: 3, title: 'Cumpleaños',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
                      {id: 4, title: 'prueba',start: new Date(y, m, 28),end: new Date(y, m, 29)}
                    ];
/*
            $scope.alertOnEventClick = function( date, jsEvent, view){
                $scope.alertMessage = (date.title + ' was clicked ');
            };*/
//configuración de calendario
             $scope.uiConfig = {
                calendar: {
                    height: 550,
                    editable: true,
                    displayEventTime: false,
                        header: {
                            left: 'today',
                            center: ' prev, title, next',
                            right: 'month  agendaWeek agendaDay'
                        }, 
                    eventClick: function (event){
                        $scope.SelectedEvent = event;
                        
                        //alert($scope.SelectedEvent.title+ "   " +  $scope.SelectedEvent.id);
                    }
                }
            };

         $scope.eventSources = [$scope.events, $scope.eventSource];

            /*Modal modal

             $scope.open = function (size) {
                      var modalInstance = $uibModal.open({
                          animation: $scope.animationsEnabled,
                          templateUrl: 'add-alumno.html',
                          controller: 'actividadController',
                          size: size
                        });
             };


               $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
              };
          */


            }])
        .controller('actividadCrearController', ['$scope', 'actividadService', 'programaService', '$stateParams', '$location', 'toastr', '$rootScope',
            function ($scope, actividadService, programaService, $stateParams, $location, toastr, $rootScope) {
                $scope.titulo = "Crear nuevo actividad";
                $scope.boton = "Guardar";

                programaService.getAllPrograma().then(function (response) {
                    $scope.programas = response.data;
                });


                $scope.saveActividad = function () {
                    actividadService.createActividad($scope.actividad).then(function () {
                        $rootScope.getAllActividades();
                        $scope.actividad = {};
                        toastr.success('Exito', 'Actividad creado.');
                    });

                };

            }])
        .controller('actividadEditarController', ['$scope', 'actividadService', 'programaService', '$stateParams', '$location', 'toastr', '$rootScope',
            function ($scope, actividadService, programaService, $stateParams, $location, toastr, $rootScope) {

                $scope.getActividad = function (actividadId) {
                    actividadService.getActividadById(actividadId).then(function successCallBack(response) {

                        $scope.actividad = response.data;
                    }, function errorCallBack(response) {
                        $location.path('/app/actividad');
                    });
                };
                $scope.getActividad(parseInt($stateParams.actividadId));
                $scope.titulo = "Editar actividad";
                $scope.boton = "Actualizar";

                programaService.getAllPrograma().then(function (response) {
                    $scope.programas = response.data;
                });

                $scope.saveActividad = function () {
//                   $scope.actividad.usuarios = [];
                    $scope.actividad.programaciones = [];
                    actividadService.updateActividad($scope.actividad).then(function (response) {
                        $rootScope.getAllActividades();
                        toastr.success('Exito', 'Actividad actualizado');
                        $location.path('/app/actividad');

                    });
                };

            }]).
        controller('ModalController', ['$scope','$uiCalendarConfig' ,'$uibModal', '$uibModalInstance' , 
            function($scope, $uiCalendarConfig , $uibModal, $uibModalInstance){



        }])
      
