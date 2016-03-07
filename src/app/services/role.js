(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Role', Role);

	Role.$inject = ['$resource', 'Services'];

	function Role($resource, Services) {
        return $resource(Services.url + 'api/rol', {},
            {
                getRoles: {
                    method: 'GET',
                    isArray: true,
                    headers : {'Content-Type': 'application/json'}
                }
            }
        );
    }
})();

