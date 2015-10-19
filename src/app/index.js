'use strict';

angular.module('angular', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'ngMessages'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl'
            })
            .when('/login', {
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true).hashPrefix('#');
    })

    .run(function($rootElement) {
        $rootElement.on('click', function(e) { e.stopPropagation(); });
    })
;
