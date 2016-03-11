(function() {
    'use strict';

    angular
    	.module('myApp')
      .controller('ListadoPacientesController', ListadoPacientesController);
        
      ListadoPacientesController.$inject = ['$scope', 'Paciente'];

      function ListadoPacientesController($scope, Paciente) {

        Paciente.listadoPacientes(null,
            function(data) {
              $scope.pacientes = data;
            },
            function() {
            }
        );
      }
})();
