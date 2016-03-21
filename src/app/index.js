'use strict';

angular.module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'ngMessages'])
    
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl'
            })
            .state('registro', {
                url: '/registro',
                templateUrl: 'app/registro/registro.html',
                controller: 'RegistroCtrl'
            })
            .state('main.altaPaciente', {
                url: '/altaPaciente',
                templateUrl: 'app/main/altaPaciente.tmpl.html',
                controller: 'AltaPacienteController'
            })
            .state('main.listadoPacientes', {
                url: '/listadoPacientes',
                templateUrl: 'app/main/listadoPacientes.tmpl.html',
                controller: 'ListadoPacientesController'
            });
        $urlRouterProvider.otherwise('/login');
        $locationProvider.html5Mode(true).hashPrefix('#');    
    })

    .run(function($rootElement) {
        $rootElement.on('click', function(e) { e.stopPropagation(); });
    })
;



    

    