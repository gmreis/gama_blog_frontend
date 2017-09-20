'use strict';

// Register `inscritoPage` component, along with its associated controller and template
angular.
  module('inscritoPage').
  component('inscritoPage', {
    templateUrl: 'inscrito-page/inscrito-page.template.html',
    controllerAs: 'inscritoCtrl',
    controller: ['$http', 
      function InscritoPageController($http) {
        self = this;
        self.login = false;

        if(localStorage.getItem("hasSubscribe") === "true"){
             self.login = true;
        } 
      }
    ]
  });
