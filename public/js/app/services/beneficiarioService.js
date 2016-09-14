var servicesModule = angular.module('AppServices');
servicesModule.factory('beneficiarioService', ['$http', function ($http) {
        return {
            apiUrl: apiUrl,
            getAllBeneficiario: function () {
                return $http.get(this.apiUrl + 'beneficiario');
            },
            getBeneficiarioById: function (beneficiarioId) {
                return $http.get(this.apiUrl + 'beneficiario/' + beneficiarioId);

            },
            createBeneficiario: function (beneficiario) {
                return $http.post(this.apiUrl + 'beneficiario/', beneficiario);
            },
             updateBeneficiario: function (id, beneficiario) {
            return $http.put(this.apiUrl + 'beneficiario/' + id, beneficiario);
             },
            deleteBeneficiario: function (beneficiarioId){
                return $http.delete(this.apiUrl + 'beneficiario/' + beneficiarioId);
            }
        };
    }]);
