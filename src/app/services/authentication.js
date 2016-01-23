(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Authentication', Authentication);

	Authentication.$inject = ['$resource', 'Services'];

	function Authentication($resource, Services) {
        return $resource(Services.url + '/api/login', {},
            {
                authenticate: {
                    method: 'POST',
                    headers : {'Content-Type': 'application/json'}
                }
            }
        );
    }
})();

