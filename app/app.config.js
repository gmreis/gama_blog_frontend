'use strict';

angular.
  module('leadingApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/novopost', {
          template: '<post-page></post-page>'
        }).
        otherwise('/home');
    }
  ]);
