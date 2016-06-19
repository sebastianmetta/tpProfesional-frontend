(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Camas', Camas);

	Camas.$inject = ['$resource', 'Services','$cookies'];

	function Camas($resource, Services, $cookies) {
        return $resource(Services.url + 'api/cama', {},
            {
                getAllCamas: {
                    method: 'GET',
                    isArray: true,
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                getCama: {
                    method: 'GET',
                    url: Services.url + 'cama/:id',
                    params: {id: '@id'},
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                crearCama: {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                actualizarCama: {
                    method: 'PUT',
                    url: Services.url + 'cama/:id',
                    params: {id: '@id'},
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                borrarCama: {
                    method: 'DELETE',
                    url: Services.url + 'cama/:id',
                    params: {id: '@id'},
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                },
                getCamasFiltrado : {
                    method: 'POST',
                    url: Services.url + 'cama/filtro',
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + $cookies.get('token') 
                    }
                }
            }
        );
    }
})();

