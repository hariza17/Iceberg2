var controllerModule = angular.module('AppControllers');

controllerModule
	.controller('beneficiarioController', ['$scope', 'beneficiarioService',
    '$stateParams', '$rootScope', '$confirm', 'toastr',
    function ($scope, beneficiarioService, $stateParams, $rootScope, $confirm, toastr) {
    	
    		$rootScope.beneficiarios = [];
    		$rootScope.titulo ="";
    		$rootScope.getAllBeneficiario = function (){
    			beneficiarioService.getAllBeneficiario().then(function(response){
    				$rootScope.beneficiarios = response.data;
    			});
    		};


    		$rootScope.getAllBeneficiario();

    		$scope.barra = function () {
			$rootScope.titulo = "NO";	
				console.log("titulo");
			};
			
    		$scope.remove = function (id){
    			$confirm({text:'¿Seguro que desea eliminar?'}).then(function(){
    				beneficiarioService.deleteBeneficiario(id).then(function(response){
    					toastr.warning('Éxito', 'beneficiario eliminado');
    					$rootScope.getAllBeneficiario();
        				//hacerlo con lodash 
        				});
    			});
    		};
    		

    }])
	.controller('beneficiarioDetalleController', ['$scope', 'beneficiarioService',
    '$stateParams', '$location', '$rootScope',
	function ($scope, beneficiarioService, $stateParams, $location, $rootScope) {
		
		$rootScope.titulo= "detalle beneficiario";
		$scope.detalleBeneficiario = function (beneficiarioId){
				beneficiarioService.getBeneficiarioById(beneficiarioId).then (function successCallBack(response){
					$scope.beneficiario = response.data;
					//console.log("respuesta" + $scope.beneficiario);
				}, function errorCallBack(response){
					console.log(response);
					$location.path('/app/beneficiario');
				});
			};

			$scope.detalleBeneficiario(parseInt($stateParams.beneficiarioId));

			$scope.getEdad = function (fecha_na) {
			var ANIO_ACTUAL = new Date().getFullYear();
			var FECHA_NA = new Date(fecha_na).getFullYear();
			return ANIO_ACTUAL - FECHA_NA;
		};

	}])
	.controller('beneficiarioCrearController', ['$scope', 'beneficiarioService','$stateParams', '$location', 'toastr', '$rootScope',
		function ($scope, beneficiarioService, $stateParams, $location, toastr, $rootScope) {
			$rootScope.titulo = "Crear beneficiario";
			$scope.accion = "Guardar";
			$scope.guardar = function (){
				beneficiarioService.createBeneficiario($scope.beneficiario).then(function(){
					$rootScope.getAllBeneficiario();
					$scope.beneficiario = {};
					toastr.success('Éxito', 'beneficiario creado');
				});

			};

	}])
	
	.controller ('beneficiarioEditarController', [ '$scope' , 'beneficiarioService', '$stateParams' , '$location', '$rootScope', 'toastr',
		function($scope, beneficiarioService, $stateParams, $location, $rootScope, toastr){
			$scope.accion = "Actualizar";
			$rootScope.titulo = "Editar beneficiario";

			$scope.getBeneficiario = function (beneficiarioId){
				beneficiarioService.getBeneficiarioById(beneficiarioId).then (function successCallBack(response){
					$scope.beneficiario = response.data;
				}, function errorCallBack(response){
					console.log(response);
					$location.path('/app/beneficiario');
				});
			};

			$scope.getBeneficiario(parseInt($stateParams.beneficiarioId));
			//console.log($stateParams.beneficiarioId);
			$scope.guardar = function (){
				beneficiarioService.updateBeneficiario($scope.beneficiario.id, $scope.beneficiario).then(function (response){
					beneficiarioService.getAllBeneficiario().then(function (response2){
						$rootScope.beneficiarios = response2.data;
						toastr.success('Éxito','Beneficiario Actualizado');
						$location.path('/app/beneficiario');
					});
				});
			};

	}])
	
