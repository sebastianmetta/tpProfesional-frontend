(function() {
    'use strict';

    angular
    	.module('myApp')
      	.controller('MainCtrl', MainController);
        
      	MainController.$inject = ['$scope', '$mdDialog', '$mdMedia'];

      	function MainController($scope, $mdDialog, $mdMedia) {
      		$scope.contentUrl = '';

      		$scope.showBusquedaPacienteModal = function(ev) {
    			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
		    	$mdDialog.show({
		      		controller: DialogController,
				    templateUrl: 'app/main/busquedaPaciente.tmpl.html',
				    parent: angular.element(document.body),
				    targetEvent: ev,
				    clickOutsideToClose:true,
				    fullscreen: useFullScreen
		    	})
    			.then(function(answer) {
      			}, function() {
      			});
			    $scope.$watch(function() {
			      return $mdMedia('xs') || $mdMedia('sm');
			    }, function(wantsFullScreen) {
			      $scope.customFullscreen = (wantsFullScreen === true);
			    });

			    function DialogController($scope, $mdDialog) {
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
			};

			$scope.changeView = function (view) {
    			$scope.contentUrl = 'app/main/' + view + '.tmpl.html';
			}

      	}
})();
