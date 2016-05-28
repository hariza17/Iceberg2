var controllerModule = angular.module('AppControllers');

controllerModule
	.controller('mainController', ['$scope', 'actividadService',
            '$stateParams', '$rootScope','$http',
            function ($scope, actividadService, $stateParams, $rootScope,$http) {

					$http.get('http://localhost:8000/indicador/col/10448992').then(function(data){
						console.log(data);

					});



            }])
