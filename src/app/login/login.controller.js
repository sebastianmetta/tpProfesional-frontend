(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginCtrl', LoginController);

        LoginController.$inject = ['$scope', '$cookies', '$location', 'Authentication'];

        function LoginController($scope, $cookies, $location, Authentication) {
            $scope.form = {
                username: '',
                password: ''
            };
            
            $scope.error = '';

            $scope.activated = false;
            
            $scope.submit = function () {
                if ($scope.form.username.length !== 0 && $scope.form.password.length !== 0) {
                    $scope.error = '';
                    $scope.activated = true;
                    Authentication.authenticate($scope.form,
                        function(data) {
                            $cookies.put('username', data.username);
                            $cookies.put('token', data.token);
                            $location.url('/main');
                        },
                        function() {
                            $scope.activated = false;
                            $scope.error = 'Usuario o contraseña incorrecta';
                        }
                    );
                }
            };

            $scope.registrarse = function () {
                $location.url('/registro');
            };
        }
})();


