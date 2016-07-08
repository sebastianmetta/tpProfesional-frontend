(function() {
    'use strict';

    angular.module('myApp')
      .controller('InternarPacientesController', InternarPacientesController);

      InternarPacientesController.$inject = ['$scope', 'Paciente'];

      function InternarPacientesController($scope, Paciente, $timeout, $q) {

        var self = this;
        // list of `paciente` value/display objects
        self.pacientes = loadAll();
        self.querySearch   = querySearch;
        
		Paciente.listadoPacientes(null, function(data) {
			angular.forEach(data, function(value, key) {
				this.push(value.nombreYApellido);
			}, self.pacientes);
		}, function() {
		});
        
        
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
//          var results = query ? self.pacientes.filter( createFilterFor(query) ) : self.pacientes,
//            deferred;
        	var results = query ? self.pacientes.filter( createFilterFor(query) ) : self.pacientes;
        	return results;
//          if (self.simulateQuery) {
//            deferred = $q.defer();
//            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
//            return deferred.promise;
//          } else {
//            return results;
//          }
        }
        
        function searchTextChange(text) {
          //$log.info('Text changed to ' + text);
        }
        function selectedItemChange(item) {
          //$log.info('Item changed to ' + JSON.stringify(item));
        }
        /**
         * Build `paciente` list of key/value pairs
         */
        function loadAll() {
        	if (self.pacientes!=null) {        		
        		var allPacientes = self.pacientes.join(',');
        		return allPacientes.split(/, +/g).map( function (paciente) {
//        			return {
////        				value: paciente.toLowerCase(),
////        				display: paciente
//        				
//        			};
        			paciente;
        		});
        	} else {
        		return [];
        	}
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);
          return function filterFn(paciente) {
            return (paciente.indexOf(lowercaseQuery) === 0);
          };
        }

      }
})();
