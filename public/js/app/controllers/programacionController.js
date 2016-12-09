var controllerModule = angular.module('AppControllers');

controllerModule
	.controller('programacionController', ['$scope', 'programacionService',
    '$stateParams', '$rootScope','$confirm', 'toastr','uiCalendarConfig', '$uibModal',
    function ($scope, programacionService, $stateParams, $rootScope, $confirm, toastr, uiCalendarConfig, $uibModal) {
				
				
 					$scope.SelectedEvent = null;
					$scope.events = [];
					$scope.eventSources = [$scope.events];
				
			$scope.NewEvent = {};

		function clearCalendar(){
				if(uiCalendarConfig.calendars.myCalendar != null){
					uiCalendarConfig.calendars.myCalendar.fullCalendar('removeEvents');
					uiCalendarConfig.calendars.myCalendar.fullCalendar('unselect');

				}

			}


			$rootScope.getAllProgramaciones = function (){
				clearCalendar();
    			programacionService.getAllProgramacion().then(function successCallBack(response){
    				$scope.events.slice(0, $scope.events.length);
    				console.log(response.data);
    				angular.forEach(response.data, function(value){
    					$scope.events.push({
    						id: value.id,//cambiar
    						title: value.actividad_id,
    						descripcion: value.observaciones,
    						start: value.fecha_inicio, // new date(parseIt(value.fecha_inicio.substr(6)))
    						end: value.fecha_fin,// new date(parseIt(value.fecha_fin.substr(6)))
    						zona: value.zona_id,
    						stick: true
    					});
    				});

    			});
    		};

			$rootScope.getAllProgramaciones(); 

			  $scope.open = function(){
       			$scope.option = {
       				//animation: $scope.animationsEnabled,
		            templateUrl: 'add-programacion.html',
		            controller: 'modalController',
		            backdrop: 'static',
		            resolve: {
		            		NewEvent: function(){
		            			return $scope.NewEvent;
		            		}
		            	}
	       			};
			 


	        	var modal = $uibModal.open($scope.option);
	        	modal.result.then(function (data){
	        		$scope.NewEvent = data.event;
	        		switch(data.operation){
	        			case 'Save':
	        			console.log($scope.NewEvent);
								programacionService.createProgramacion($scope.NewEvent).then(function successCallBack(){
									//$scope.cancel();
									$rootScope.getAllProgramaciones();
									toastr.success('Éxito', 'Programación creada');
								}, function errorCallBack(error){
									toastr.warning('Error', 'Error al crear');
								});
							

	        			break;

	        			case 'Delete':
					    		$confirm({text:'¿Seguro que desea eliminar?'}).then(function(){
					    			programacionService.deleteProgramacion($scope.NewEvent.id).then(function(response){
					    				toastr.warning('Éxito', 'programacion eliminado');
					    				$rootScope.getAllProgramaciones();
					        				//hacerlo con lodash 
					        		});
					    		});
	        			break;
	        			case 'Edit':
	        					programacionService.updateProgramacion($scope.NewEvent.id, $scope.NewEvent).then(function (response){
									$rootScope.getAllProgramaciones();
									toastr.success('Éxito','programación Actualizado');
									//$location.path('/app/programacion');
								//	});
								});
	        			break;

	        			default:
	        			break;

	        		}
	        	}, function(){
	        		console.log("cerrado el modal");
	        	});

	        };


             $scope.uiConfig = {
                calendar: {
                    height: 550,
                    editable: true,
                    displayEventTime: true,
                        header: {
                            left: 'today',
                            center: ' prev, title, next',
                            right: 'month  agendaWeek agendaDay'
                        }, 
                        timeFormat: {
                        	month: ' ',
                        	agenda: 'h:mm t'
                        },
                        selectable: true,
                        selectHelper: true,
                        select: function(start,end){
       						$rootScope.titulo = "Agregar programación";
       						$rootScope.boton= "Guardar";
       						//mostrar()
                        	var fromDate= moment(start).format('YYYY/MM/DD H:mm');
                        	var endDate= moment(end).format('YYYY/MM/DD H:mm');
                        	$scope.NewEvent = {
                        		id : 0,
                        		fecha_inicio: fromDate,
                        		fecha_fin : endDate,
                        		actividad_id: '',
                        		observaciones: '',
                        		zona_id: ''
                        	}
                        	  console.log($scope.NewEvent);
                        	$scope.open();
                        },
                    	eventClick: function (event){
                    	//$scope.open(event);
       						$scope.SelectedEvent = event;
       						//console.log(event.start + "   " + event.end);
       						$rootScope.titulo = "Editar programación";
       						$rootScope.boton= "Actualizar";
                        	var fromDate = moment(event.start).format('YYYY/MM/DD  H:mm');
                        	var endDate = moment(event.end).format('YYYY/MM/DD  H:mm');
                        	$scope.NewEvent = {
                        		id : event.id,
                        		fecha_inicio: fromDate,
                        		fecha_fin : endDate,
                        		actividad_id: event.title,
                        		observaciones: event.descripcion,
                        		zona_id: event.zona
                        }
                        	console.log();
                        	$scope.open();
                      
                        }
                    }
                };
            


    }])
	.controller('modalController', ['$scope', 'programacionService',
    '$stateParams', '$location', 'toastr', '$rootScope','$uibModalInstance','NewEvent','zonaService','actividadService',
	function ($scope, programacionService, $stateParams, $location, toastr, $rootScope, $uibModalInstance, NewEvent,zonaService,actividadService) {
			$scope.NewEvent = NewEvent;
			$scope.Message = "";

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



			$scope.ok = function(){
				if($rootScope.boton == "Guardar"){
						$uibModalInstance.close({event: $scope.NewEvent, operation: 'Save'});
				}

				if($rootScope.boton == "Actualizar"){
						$uibModalInstance.close({event: $scope.NewEvent, operation: 'Edit'});
				}
			};

			$scope.delete = function(){
					$uibModalInstance.close({event: $scope.NewEvent, operation: 'Delete'});
					//toastr.warning('Error', 'Titulo requerido');
			};
			
			$scope.cancel = function(){
				$uibModalInstance.dismiss('cancel');
			};
	
	}])

/*
	.controller("programacionCrearController", ['$scope', 'programacionService', '$stateParams', '$location', 'toastr','$rootScope', '$uibModal','$uibModalInstance', 'zonaService', 'actividadService',
		function ($scope, programacionService, $stateParams, $location, toastr, $rootScope, $uibModal, $uibModalInstance, zonaService, actividadService) {
			//funciona
			$rootScope.titulo = "Crear nueva zona";
			//console.log($rootScope.SelectedEvent.end);
			//$rootScope.getAllProgramaciones();
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
						//$rootScope.getAllProgramaciones();
						//$scope.programacion={};
						$scope.cancel();
						toastr.success('Éxito', 'Programación creada');
					}, function errorCallBack(error){
						toastr.warning('Error', 'Error al crear');
					});
				};

			

		    $scope.cancel = function () {
		        $uibModalInstance.dismiss('cancel');
		    };
	}])*/