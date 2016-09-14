var controllerModule = angular.module('AppControllers');

controllerModule
	.controller('zonaController', ['$scope', 'zonaService',
    '$stateParams', '$rootScope','$confirm', 'toastr',
    function ($scope, zonaService, $stateParams, $rootScope, $confirm, toastr) {
			//funciona
			$rootScope.zonas = [];
			$rootScope.getAllZonas = function () {
				zonaService.getAllZona().then(function (response) {
					$rootScope.zonas = response.data;
				});
			};
			$rootScope.getAllZonas();

			$scope.barra = function () {
			$rootScope.titulo = "NO";	
				console.log("titulo");
			};

			$scope.remove = function (id){
    			$confirm({text:'¿Seguro que desea eliminar?'}).then(function(){
    				zonaService.deleteZona(id).then(function(response){
    							toastr.warning('Éxito', 'Zona eliminada');
    							$rootScope.getAllZonas();
        				}, function(error){
    							toastr.error('Error', 'Está intentando eliminar un registro con datos dependientes');
        					});
    			});
    			
    		};
    }])
	.controller('zonaDetalleController', ['$scope', 'zonaService',
    '$stateParams', '$location', 'toastr', '$rootScope',
	function ($scope, zonaService, $stateParams, $location, toastr, $rootScope) {
			$rootScope.titulo= "detalle zona";
			
/*
			$scope.getZona = function (zonaId) {
				zonaService.getZonaById(zonaId).then(function (response) {
					$scope.zona = response.data;

				}, function (response) {
					console.log(response);
					$location.path('/app/zona');
				});
			};*/
/*
			$scope.getZona(parseInt($stateParams.zonaId));
			//Metodo para eliminar la Zona
			$scope.removeZona = function (zonaId) {
				zonaService.deleteZona(zonaId).then(function (response) {
					$rootScope.getAllZonas();
					$location.path('/app/zona');
					toastr.warning('Exito', 'Zona eliminada');

				}, function (response) {
					console.log(response);
					$location.path('/app/zona');
				});
			};
			*/
	}])
	.controller('zonaCrearController', ['$scope', 'zonaService', '$stateParams', '$location', 'toastr', '$rootScope',
		function ($scope, zonaService, $stateParams, $location, toastr, $rootScope) {
			//funciona
			$rootScope.titulo = "Crear nueva zona";
			$scope.boton = "Guardar";
			$scope.saveZona = function () {
				zonaService.createZona($scope.zona).then(function () {
					$rootScope.getAllZonas();
					$scope.zona = {};
					toastr.success('Exito', 'Zona creada');
				});

			};

	}])
	.controller('zonaEditarController', ['$scope', 'zonaService', '$stateParams', '$location', 'toastr', '$rootScope',
		function ($scope, zonaService, $stateParams, $location, toastr, $rootScope) {
			//funciona
			$rootScope.titulo = "Editar zona";
			$scope.boton = "Actualizar";
			$scope.getZona = function (zonaId) {
				zonaService.getZonaById(zonaId).then(function successCallBack(response) {
					$scope.zona = response.data;
				}, function errorCallBack(response) {
					$location.path('/app/zona');
				});
			};
			$scope.getZona(parseInt($stateParams.zonaId));
			$scope.saveZona = function (){
				zonaService.updateZona($scope.zona.id, $scope.zona).then(function (response){
					zonaService.getAllZona().then(function (response2){
						$rootScope.zonas = response2.data;
						toastr.success('Éxito','Zona Actualizado');
						$location.path('/app/zona');
					});
				});
			};
	}])
