(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Internacion', Internacion);

	Internacion.$inject = ['$resource', 'Services','$cookies'];

	function Internacion($resource, Services, $cookies) {
        return $resource(Services.url + 'api/internacionpaciente', {},
            {
                getPacienteInternado: {
                    method: 'GET',
                    url: Services.url + 'internacionpaciente/:id',
                    params: {id: '@id'},
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                listadoPacientesInternados: {
                    method: 'GET',
                    isArray: true,
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                internarPaciente: {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                }
            }
        );
    }
})();

