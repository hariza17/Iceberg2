var servicesModule = angular.module('AppServices');
servicesModule.factory('programacionService', ['$http', function ($http) {
        return {
            apiUrl: apiUrl,
            getAllProgramacion: function () {
                return $http.get(this.apiUrl + 'beneficiario');
            },
            getProgramacionById: function (programacionId) {
                return $http.get(this.apiUrl + 'programacion/' + programacionId);

            },
            createProgramacion: function (programacion) {
                return $http.post(this.apiUrl + 'programacion/', programacion);
            },
             updateProgramacion: function (id, programacion) {
            return $http.put(this.apiUrl + 'programacion/' + id, programacion);
             },
            deleteProgramacion: function (programacionId){
                return $http.delete(this.apiUrl + 'programacion/' + programacionId);
            }
        };
    }]);
