'use strict';

// Register `obrigadoPage` component, along with its associated controller and template
angular.
  module('obrigadoPage').
  component('obrigadoPage', {
    templateUrl: 'obrigado-page/obrigado-page.template.html',
    controllerAs: 'obrigadoCtrl',
    controller: ['$http', 
      function ObrigadoPageController($http) {
        self = this;
        self.login = false;

        if(localStorage.getItem("hasSubscribe") === "true"){
             self.login = true;
        } 
      }
    ]
  });
