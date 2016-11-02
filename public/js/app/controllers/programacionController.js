var controllerModule = angular.module('AppControllers');

controllerModule
	.controller('programacionController', ['$scope', 'programacionService',
    '$stateParams', '$rootScope','$confirm', 'toastr','uiCalendarConfig',
    function ($scope, programacionService, $stateParams, $rootScope, $confirm, toastr, uiCalendarConfig) {
				$scope.barra = function () {
				$rootScope.titulo = "NO";	
					console.log("titulo");
				};
		//inicio calendario
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

         //fin calendario


			/*$rootScope.zonas = [];
			$rootScope.getAllZonas = function () {
				zonaService.getAllZona().then(function (response) {
					$rootScope.zonas = response.data;
				});
			};
					
					$rootScope.getAllZonas();

			
				$scope.remove = function (id){
	    			$confirm({text:'¿Seguro que desea eliminar?'}).then(function(){
	    				zonaService.deleteZona(id).then(function(response){
	    							toastr.warning('Éxito', 'Zona eliminada');
	    							$rootScope.getAllZonas();
	        				}, function(error){
	    							toastr.error('Error', 'Está intentando eliminar un registro con datos dependientes');
	        					});
	    			});
	    		};*/
    }])
	.controller('programacionDetalleController', ['$scope', 'programacionService',
    '$stateParams', '$location', 'toastr', '$rootScope',
	function ($scope, programacionService, $stateParams, $location, toastr, $rootScope) {
			$rootScope.titulo= "detalle zona";

			/*$scope.detalleZona = function (zonaId){
				zonaService.getZonaById(zonaId).then(function successCallBack(response){
					$scope.zona = response.data;
				}, function errorCallBack (response){
					$location.path('/app/zona');
				});
			};

			$scope.detalleZona(parseInt($stateParams.zonaId));*/

	}])
	.controller('programacionCrearController', ['$scope', 'programacionService', '$stateParams', '$location', 'toastr','$rootScope',
		function ($scope, programacionService, $stateParams, $location, toastr, $rootScope) {
			//funciona
			$rootScope.titulo = "Crear nueva zona";
			
			$scope.boton = "Guardar";
			$scope.programas = [];
		
			/*
				$sc

				$scope.getAllRiesgos();ope.saveZona = function () {
					zonaService.createZona($scope.zona).then(function () {
						$rootScope.getAllZonas();
						$scope.zona = {};
						toastr.success('Exito', 'Zona creada');
					});

				};*/
	}])
	.controller('programacionEditarController', ['$scope', 'programacionService', '$stateParams', '$location', 'toastr', '$rootScope',
		function ($scope, programacionService, $stateParams, $location, toastr, $rootScope) {
			//funciona
			$rootScope.titulo = "Editar zona";
			$scope.boton = "Actualizar";
			/*
				$scope.getZona = function (zonaId) {
					zonaService.getZonaById(zonaId).then(function successCallBack(response) {
						$scope.zona = response.data;
					}, function errorCallBack(response) {
						$location.path('/app/zona');
					});
				};
					$scope.getZona(parseInt($stateParams.zonaId));
						$scope.saveZona = function (){
							zonaService.updateZona($scope.zona.id, $scope.zona).then(function(response){
								zonaService.getAllZona().then(function (response2){
									$rootScope.zonas = response2.data;
									toastr.success('Éxito','Zona Actualizado');
									$location.path('/app/zona');
								});
							});
						};*/
	}])
