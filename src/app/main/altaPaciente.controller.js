(function() {
    'use strict';

    angular
    	.module('myApp')
      .controller('AltaPacienteController', AltaPacienteController);
        
      AltaPacienteController.$inject = ['$scope', 'Paciente'];

      function AltaPacienteController($scope, Paciente) {
      	
      	$scope.altaPaciente = {
          dni: '',
          nombreYApellido: '',
          direccion: '',
          telefono: '',
          antecedentesFamiliares: '',
          observaciones:''
        };

        $scope.altaPacienteError = '';

      	$scope.crearPaciente = function () {
          Paciente.altaPaciente($scope.altaPaciente,
            function(data) {
            },
            function() {
              $scope.altaPacienteError = 'El paciente no pudo ser dado de alta esta vez';
            }
          );
        };
      }
})();
