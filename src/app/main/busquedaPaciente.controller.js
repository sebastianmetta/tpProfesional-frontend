(function() {
    'use strict';

    angular
    	.module('myApp')
      .controller('BusquedaPacienteController', BusquedaPacienteController);
        
      BusquedaPacienteController.$inject = ['$scope', '$mdDialog'];

      function BusquedaPacienteController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
      
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
          
        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
      }
})();
