(function() {
    'use strict';

    angular
    	.module('myApp')
      .controller('BusquedaPacienteController', BusquedaPacienteController);
        
      BusquedaPacienteController.$inject = ['$scope', '$mdDialog', 'Paciente'];

      function BusquedaPacienteController($scope, $mdDialog, Paciente) {
        $scope.mostrarBusqueda = false;

        $scope.filtroPaciente = {
          dni: '',
          nombreYApellido: ''
        };
        
        $scope.hide = function() {
          $mdDialog.hide();
        };
      
        $scope.cancelar = function() {
          $mdDialog.cancel();
        };
          
        $scope.buscarPaciente = function () {
          Paciente.filtroPacientes($scope.filtroPaciente,
            function(data) {
              $scope.mostrarBusqueda = true;
              $scope.pacientesFiltrados = data;
            },
            function() {
            }
          );
        };
      }
})();
