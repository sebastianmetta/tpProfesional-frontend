'use strict';

angular.module('angular')
    .controller('LoginCtrl', function ($scope) {
        $scope.form = {
            username: '',
            password: ''
        };
        $scope.error = '';
    }
);
