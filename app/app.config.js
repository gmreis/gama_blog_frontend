'use strict';

angular.
  module('construcaoBlogApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/novopost', {
          template: '<showpost-page></showpost-page>'
        }).
        when('/post/:postId', {
          template: '<showpost-page></showpost-page>'
        }).
        otherwise('/home');
    }
  ]).
  run(function($rootScope, $window, $location) { 
    $window.ga('create', 'UA-106574119-1', 'auto');
    $rootScope.$on('$locationChangeSuccess', function(event) {
      // console.log('locationChangeSuccess');
      if (!$window.ga){
        return;
      }
      $window.ga('send', 'pageview', { page: $location.path() });
    });
  });
