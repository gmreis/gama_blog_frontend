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
  ]).
  run(function($rootScope, $window) { 
    $rootScope.$on("$routeChangeStart",function(event, next, current){
        // Caso o evento do angular seja de alteracao de rota disparar o evento customizado
        if(next.templateUrl) {
            // Evento customizado do google tag manager
            $window.dataLayer.push(
              {
                'event': 'routeChange',
                'virtualPageView': next.templateUrl
              }
            );
        }
    });
  });
