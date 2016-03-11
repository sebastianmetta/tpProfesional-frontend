(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Paciente', Paciente);

	Paciente.$inject = ['$resource', 'Services', '$cookies'];

	function Paciente($resource, Services, $cookies) {
        return $resource(Services.url + 'api/paciente', {},
            {
                altaPaciente: {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                listadoPacientes: {
                    method: 'GET',
                    isArray: true,
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                }
            }
        );
    }
})();

