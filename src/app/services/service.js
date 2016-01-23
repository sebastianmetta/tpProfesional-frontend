(function() {
	'use strict';

	angular
		.module('myApp')
		.factory('Services', Services); 
			
	Services.$inject = [];

	function Services () {
    	return {
        	url: 'http://backend-tpprofesional.rhcloud.com/',
    	};
	}
})();

