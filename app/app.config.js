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
        when('/post/:postId', {
          template: '<showpost-page></showpost-page>'
        }).
        when('/obrigado', {
          template: '<obrigado-page></obrigado-page>'
        }).
        when('/inscrito', {
          template: '<inscrito-page></inscrito-page>'
        }).
        when('/contato', {
          template: '<contato-page></contato-page>'
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
