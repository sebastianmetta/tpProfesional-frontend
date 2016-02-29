(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('RegistroCtrl', RegistroController)
        .config(function($mdThemingProvider) {
    		
  		});

        RegistroController.$inject = ['$scope', '$location','Registration','Role'];

        function RegistroController($scope,$location,Registration) {
      		$scope.form = {
              username: '',
              email: '',
              password: '',
              nombreYApellido: '',
              dni: '',
              telefono: '',
              roleId: ''
          };
          
          $scope.error = '';

          $scope.isAvailable = true;
          
          $scope.disabled = false;
          /*$scope.roles = ('R1 R2 R3 R4 JEFE_RESIDENTES JEFE_PLANTA CONSULTOR_EXTERNO').split(' ').map(function (role) {
              return {abbrev: role};
          });*/
          
          //TODO obtner los roles consumiendo el servicio de getRol
          $scope.roles = ('1 2 3 4 5 6 7 8').split(' ').map(function (role) {
              return {roleId: role};
          });
          
          /*$scope.roles = Role.getRoles("",
            
                function() {
               
                },

                function() {
                  $scope.error = 'No es Posible Obtener los Roles del Servicio';
                  
                }
              );
          */

          /*var isOk = function() {
            if($scope.form.userName.length !== 0 && $scope.form.email.length && $scope.form.password.length !== 0 && $scope.form.nombreYApellido.length !== 0 && $scope.form.dni.length !== 0 && $scope.form.telefono !== 0) {
                return true;
            } else{
              return false;
            }
          };*/
 
          /*if ($scope.form.$valid) {
            $scope.disabled = false;
          };*/

          $scope.backToLogin = function() {
            $location.url('/login');
          };

          //TODO: Submit Button disable at the begining, and then enable it
          //TODO: Validate the confirm password at writing moment
          //TODO: Confirm Password and compare with the original
          //TODO: Make all the form smaller
          //TODO: FIX delay to hide the hint message and hide it when you have maxlength
          //TODO: Validate the whole fomr with $valid and enable the button
          $scope.submit = function() {        

            //if(isOk){

              Registration.register($scope.form,
            
                function() {
                  $scope.isAvailable = false;
                  $scope.errorFlag = false;
                  $scope.message = 'Registración de Usuario Exitosa';
                },
                function() {
                  $scope.error = 'No es Posible Registrar un Nuevo Usuario';
                  $scope.errorFlag = true;
                }
              );

            //}
          };
        }                  
})();


