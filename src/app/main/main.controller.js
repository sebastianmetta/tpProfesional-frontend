(function() {
    'use strict';

    angular
    	.module('myApp')
      .controller('MainCtrl', MainController);
        
      MainController.$inject = ['$scope', '$mdDialog', '$mdMedia', 'Paciente'];

      function MainController($scope, $mdDialog, $mdMedia, Paciente) {
      	$scope.contentUrl = '';

      	$scope.altaPaciente = {
          dni: '',
          nombreYApellido: '',
          direccion: '',
          telefono: '',
          antecedentesFamiliares: '',
          observaciones:''
        };

        $scope.altaPacienteError = '';

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

			  $scope.crearPaciente = function () {
          Paciente.altaPaciente($scope.altaPaciente,
            function(data) {
            },
            function() {
              $scope.altaPacienteError = 'El paciente no pudo ser dado de alta';
            }
          );
        };
      }
})();
