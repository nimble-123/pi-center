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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
