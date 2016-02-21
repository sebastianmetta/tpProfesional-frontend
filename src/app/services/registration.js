(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Registration', Registration);

	Registration.$inject = ['$resource', 'Services'];

	function Registration($resource, Services) {
        return $resource(Services.url + '/api/registro', {},
            {
                register: {
                    method: 'POST',
                    headers : {'Content-Type': 'application/json'}
                }
            }
        );
    }
})();
