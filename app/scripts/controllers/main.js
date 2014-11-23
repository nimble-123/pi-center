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
  	console.log('main.js controller aufgerufen');

    $scope.gpios = [{number: 0, direction: 'in', value: 0},
					{number: 1, direction: 'in', value: 0},
					{number: 2, direction: 'in', value: 0},
					{number: 3, direction: 'in', value: 0},
					{number: 4, direction: 'in', value: 0},
					{number: 5, direction: 'in', value: 0},
					{number: 6, direction: 'in', value: 0},
					{number: 7, direction: 'in', value: 0}];

    $scope.switchDir = function(gpio) {
       if (gpio.direction === 'in') {
            
    		gpio.direction = 'out';
        } else{
            
            gpio.direction = 'in';
    	}
        console.log('GPIO ' + gpio.number + ' mode switched to ' + ((gpio.direction === 'in') ? 'in' : 'out'));
    };

    $scope.switchPow = function(gpio) {
    	if (gpio.value === 0) {
    		// gpio schalten durch shelljs oder pi-gpio nodejs module
    		gpio.value = 1;
    	} else{
    		// gpio schalten durch shelljs oder pi-gpio nodejs module
    		gpio.value = 0;
    	}
        console.log('GPIO ' + gpio.number + ' power switched to ' + ((gpio.value === 1) ? 'on' : 'off'));
    };

  });
