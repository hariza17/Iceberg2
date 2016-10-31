/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var servicesModule = angular.module('AppServices');

servicesModule.factory('actividadService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getAllActividad: function () {
            return $http.get(this.apiUrl + 'actividad' , {
                    cache: true,
                    params : {}
            });
        },
        getActividadById: function (actividadId) {
            return $http.get(this.apiUrl + 'actividad/' + actividadId);
        },
        createActividad: function (actividad) {
            return $http.post(this.apiUrl + 'actividad/', actividad);
        },
        updateActividad: function (actividadId , actividad) {
            return $http.put(this.apiUrl + 'actividad/'+ actividadId, actividad);
        },
        deleteActividad: function (actividadId) {
            return $http.delete(this.apiUrl + 'actividad/' + actividadId);
        }
    };
    }]);
