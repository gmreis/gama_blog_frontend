'use strict';

angular.
  module('construcaoBlogApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('');

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
        when('/infografico', {
          template: '<contato-page></contato-page>'
        }).
        when('/admin/login', {
          template: '<login-page></login-page>'
        }).
        when('/admin/artigos', {
          template: '<artigos-page></artigos-page>'
        }).
        when('/admin/artigos/:artigoId', {
          template: '<edit-page></edit-page>'
        }).
        otherwise('/home');
    }
  ]).
  run(function($rootScope, $window, $location) { 
    $window.fbq('init', '111425179604541');
    $window.ga('create', 'UA-106574119-1', 'auto');
    $rootScope.$on('$locationChangeSuccess', function(event) {
      // console.log('locationChangeSuccess');
      if (!$window.ga){
        return;
      }
      // console.log("teste "+$location.path());
      $window.fbq('track', 'PageView', { page: $location.path() });
      $window.ga('send', 'pageview', { page: $location.path() });
    });
  });
