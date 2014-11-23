'use strict';

/**
 * @ngdoc function
 * @name piCenterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the piCenterApp
 */
angular.module('piCenterApp')
  .controller('MainCtrl', function ($scope) {
  	console.log("main.js controller aufgerufen");
    $scope.gpios = [{number: 0, direction: 'in', value: 0},
					{number: 1, direction: 'in', value: 0},
					{number: 2, direction: 'in', value: 0},
					{number: 3, direction: 'in', value: 0},
					{number: 4, direction: 'in', value: 0},
					{number: 5, direction: 'in', value: 0},
					{number: 6, direction: 'in', value: 0},
					{number: 7, direction: 'in', value: 0}];

    $scope.switchDir = function(gpio) {
    	console.log("switchDir aufgerufen");
    	if (gpio.direction == 'in') {
    		// gpio schalten durch shelljs oder pi-gpio nodejs module
    		gpio.direction = 'out';
    	} else{
    		// gpio schalten durch shelljs oder pi-gpio nodejs module
    		gpio.direction = 'in';
    	};
    	
    };

    $scope.switchPow = function(gpio) {
    	console.log("switchPow aufgerufen");
    	if (gpio.value == 0) {
    		// gpio schalten durch shelljs oder pi-gpio nodejs module
    		gpio.value = 1;
    	} else{
    		// gpio schalten durch shelljs oder pi-gpio nodejs module
    		gpio.value = 0;
    	};
    };

  });
