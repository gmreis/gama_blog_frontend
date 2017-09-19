'use strict';

// Register `contatoPage` component, along with its associated controller and template
angular.
  module('contatoPage').
  component('contatoPage', {
    templateUrl: 'contato-page/contato-page.template.html',
    controllerAs: 'contatoCtrl',
    controller: ['$http',
      function ContatoPageController($http) {
        self = this;

        self.teste = teste;

        function teste() {
          console.log(" Eu funciono!")
        };
      }
    ]
  });