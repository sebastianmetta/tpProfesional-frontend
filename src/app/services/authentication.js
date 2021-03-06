(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Authentication', Authentication);

	Authentication.$inject = ['$resource', 'Services'];

	function Authentication($resource, Services) {
        
        var authenticate = false;
        
        var interfaz = {
            isAuthenticated: function () {
                return authenticate;
            },

            setAuthenticated: function (state) {
                authenticate = state;
            },

            serviceCall : $resource(Services.url + 'api/login', {},
            {
                authenticate: {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }
            })
        }

        return interfaz;
    }
})();


