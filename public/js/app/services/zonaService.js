var servicesModule = angular.module('AppServices');
servicesModule.factory('zonaService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getAllZona: function () {
            return $http.get(this.apiUrl + 'zona');
        },
        getZonaById: function (zonaId) {
            return $http.get(this.apiUrl + 'zona/' + zonaId);

        },
        createZona: function (zona) {
            return $http.post(this.apiUrl + 'zona', zona);
        },
        updateZona: function (id, zona) {
            return $http.put(this.apiUrl + 'zona/' + id, zona);
        },
        deleteZona: function (zonaId,zona) {
            return $http.delete(this.apiUrl + 'zona/' + zonaId);
        }
    };
    }]);
