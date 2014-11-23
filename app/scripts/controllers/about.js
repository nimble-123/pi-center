'use strict';

/**
 * @ngdoc function
 * @name piCenterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the piCenterApp
 */
angular.module('piCenterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
