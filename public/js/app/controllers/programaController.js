/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var controllerModule = angular.module('AppControllers');

controllerModule
        .controller('programaController', ['$scope', 'programaService',
            '$stateParams', '$rootScope', '$confirm', 'toastr',
            function ($scope, programaService, $stateParams, $rootScope, $confirm, toastr) {
                $rootScope.programas = [];
                $rootScope.getAllProgramas = function () {
                    programaService.getAllPrograma().then(function (response) {
                        $rootScope.programas = response.data;
                    });
                };

                $rootScope.getAllProgramas();

                $scope.barra = function (){
                $rootScope.titulo = "NO";
                console.log("titulo");
                };

                $scope.remove = function (id){
                $confirm({text:'¿Seguro que desea eliminar?'}).then(function(){
                    programaService.deletePrograma(id).then(function(response){
                        toastr.success('Éxito', 'programa eliminado');
                        $rootScope.getAllProgramas();
                        }, function (error) {
                            toastr.warning('Error', 'esta intentando eliminar un registro con datos dependientes');
                        });
                });
            };


            }])
        .controller('programaCrearController', ['$scope', 'programaService', '$stateParams', '$location', 'toastr', '$rootScope',
            function ($scope, programaService, $stateParams, $location, toastr, $rootScope) {
                $rootScope.titulo = "Crear nuevo programa";
                $scope.boton = "Guardar";
                $scope.savePrograma = function () {
                    programaService.createPrograma($scope.programa).then(function () {
                        $rootScope.getAllProgramas();
                        $scope.programa = {};
                        toastr.success('Exito', 'Programa creado.');
                    }, function (error){

                    });

                };

            }])
        .controller('programaEditarController', ['$scope', 'programaService', '$stateParams', '$location', 'toastr', '$rootScope',
            function ($scope, programaService, $stateParams, $location, toastr, $rootScope) {
                $rootScope.titulo = "Editar programa";
                $scope.boton = "Actualizar";
                $scope.getPrograma = function (programaId) {
                    programaService.getProgramaById(programaId).then(function successCallBack(response) {
                        $scope.programa = response.data;
                    }, function errorCallBack(response) {
                        $location.path('/app/programa');
                    });
                };

                $scope.getPrograma(parseInt($stateParams.programaId));
                $scope.savePrograma = function () {
                 programaService.updatePrograma($scope.programa.id, $scope.programa).then(function (response){
                    programaService.getAllPrograma().then(function (response2){
                        $rootScope.programas = response2.data;
                        toastr.success('Éxito', 'Programa Actualizado');
                        $location.path('/app/programa');
                    });
                 });
                };

            }])
        .controller('programaDetalleController', ['$scope' , 'programaService', 
            '$stateParams', '$location', '$rootScope' , function ($scope, programaService , $stateParams, $location, $rootScope){
                $rootScope.titulo = "Detalle programa";
/*
                    $scope.detalleBeneficiario = function (beneficiarioId){
                beneficiarioService.getBeneficiarioById(beneficiarioId).then (function successCallBack(response){
                    $scope.beneficiario = response.data;
                }, function errorCallBack(response){
                    console.log(response);
                    $location.path('/app/programa');
                });
            };

            $scope.detalleBeneficiario(parseInt($stateParams.beneficiarioId));

*/
            }])


