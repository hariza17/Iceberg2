var controllerModule = angular.module('AppControllers');

controllerModule
	.controller('programacionController', ['$scope', 'programacionService',
    '$stateParams', '$rootScope','$confirm', 'toastr','uiCalendarConfig', '$uibModal',
    function ($scope, programacionService, $stateParams, $rootScope, $confirm, toastr, uiCalendarConfig, $uibModal) {
				
				$scope.barra = function () {
				$rootScope.titulo = "NO";	
					console.log("titulo");
				};
 					$rootScope.SelectedEvent = null;
					$rootScope.events = [];
				
			$rootScope.getAllProgramaciones = function (){
    			programacionService.getAllProgramacion().then(function successCallBack(response){
    				//$scope.events.slice(0, events.length);
    				console.log(response.data);
    				angular.forEach(response.data, function(value){

    					$rootScope.events.push({
    						title: value.actividad_id,
    						descripcion: value.observaciones,
    						start: value.fecha_inicio, // new date(parseIt(value.fecha_inicio.substr(6)))
    						end: value.fecha_fin,// new date(parseIt(value.fecha_fin.substr(6)))
    						zona: value.zona_id
    					});
    				});

    			});
    		};

				$rootScope.getAllProgramaciones(); 

			  $scope.open = function (event) {
       			$rootScope.SelectedEvent = event;
       			//console.log($scope.SelectedEvent.title);
       			 var modalInstance = $uibModal.open({
	            animation: $scope.animationsEnabled,
	            templateUrl: 'add-programacion.html',
	            controller: 'programacionCrearController'
	       		 });
   			 };

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
                    	$scope.open(event);
                        
                    }
                }
            };

         $scope.eventSources = [$rootScope.events, $scope.eventSource];

    }])
	.controller('programacionDetalleController', ['$scope', 'programacionService',
    '$stateParams', '$location', 'toastr', '$rootScope',
	function ($scope, programacionService, $stateParams, $location, toastr, $rootScope) {
			$rootScope.titulo= "detalle zona";

	}])
	.controller("programacionCrearController", ['$scope', 'programacionService', '$stateParams', '$location', 'toastr','$rootScope', '$uibModal','$uibModalInstance', 'zonaService', 'actividadService',
		function ($scope, programacionService, $stateParams, $location, toastr, $rootScope, $uibModal, $uibModalInstance, zonaService, actividadService) {
			//funciona
			$rootScope.titulo = "Crear nueva zona";
			//console.log($rootScope.SelectedEvent.end);
			$scope.boton = "Guardar";
			//$scope.progracion = [];

			$scope.zonas = [];
			$scope.actividades= [];

			$scope.getAllZonas = function (){
				zonaService.getAllZona().then(function successCallBack(response){
					$scope.zonas = response.data;
				});	
			};
			$scope.getAllZonas();

			$scope.getAllActividades = function (){
				actividadService.getAllActividad().then(function successCallBack(response){
					$scope.actividades = response.data;
				});	
			};
			$scope.getAllActividades();
				
				$scope.guardar = function(){
					programacionService.createProgramacion($scope.programacion).then(function successCallBack(){
						$rootScope.events = [];
						$rootScope.getAllProgramaciones();
						$scope.programacion={};
						$scope.cancel();
						toastr.success('Éxito', 'Programación creada');
					}, function errorCallBack(error){
						toastr.warning('Error', 'Error al crear');
					});
				};

			

		    $scope.cancel = function () {
		        $uibModalInstance.dismiss('cancel');
		    };
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
