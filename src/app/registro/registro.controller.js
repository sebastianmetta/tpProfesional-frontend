(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('RegistroCtrl', RegistroController)
        .config(function($mdThemingProvider) {
    		
  		});

        RegistroController.$inject = ['$scope', '$location','Registration'];

        function RegistroController($scope,$location,Registration) {
      		$scope.form = {
        			name: '',
              lastName: '',
              userName: '',
              password: '',
              confirmPassword: '',
              dni: '',
              phoneNumber: '',
              role: ''
          }
          
          $scope.error = '';

          $scope.isAvailable = true;
          // $scope.errorFlag = false;

          $scope.roles = ('R1 R2 R3 R4 JEFE_RESIDENTES JEFE_PLANTA CONSULTOR_EXTERNO').split(' ').map(function (role) {
              return {abbrev: role};
          });

          var isOk = function() {
          if($scope.form.name.length !== 0 && $scope.form.lastName.length !== 0 && $scope.form.userName.length !== 0 && $scope.form.password.length !== 0 && $scope.form.confirmPassword.length !== 0 && $scope.form.dni.length !== 0 && $scope.form.phoneNumber !== 0 && $scope.form.password == $scope.form.confirmPassword)
            return true;
          else
            return false;
          };

          $scope.backToLogin = function() {
            $location.url('/login');
          };

          //TODO: Submit Button disable at the begining, and then enable it
          //TODO: Validate the confirm password at writing moment
          
          //TODO: Make all the form smaller
          //TODO: FIX delay to hide the hint message and hide it when you have maxlength
        
          $scope.submit = function() {        

            if(isOk){

              Registration.register($scope.form,
                
                function(data) {
                  $scope.isAvailable = false;
                  $scope.errorFlag = false;
                  $scope.message = 'Registration was Successfully'
                },
                function() {
                  $scope.error = 'Unable to Register a New User';
                  $scope.errorFlag = true;
                }
              );

            }
          };
        }                  
})();


