(function() {
    'use strict';

    angular
    	.module('myApp')
      .controller('BusquedaPacienteController', BusquedaPacienteController);
        
      BusquedaPacienteController.$inject = ['$scope', '$mdDialog'];

      function BusquedaPacienteController($scope, $mdDialog) {
        $scope.mostrarBusqueda = false;
        
        $scope.hide = function() {
          $mdDialog.hide();
        };
      
        $scope.cancelar = function() {
          $mdDialog.cancel();
        };
          
        $scope.buscarPaciente = function() {
          $scope.mostrarBusqueda = true;
        };
      }
})();
