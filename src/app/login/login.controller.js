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
            
            $scope.submit = function () {
                if ($scope.form.username.length !== 0 && $scope.form.password.length !== 0) {
                    Authentication.authenticate($scope.form,
                        function(data) {
                            $cookies.username = data.username;
                            $cookies.token = data.token;
                            $location.url('/main');
                        },
                        function() {
                            $scope.error = 'Usuario o contraseña incorrecta';
                        }
                    );
                }
            };
        }
})();


