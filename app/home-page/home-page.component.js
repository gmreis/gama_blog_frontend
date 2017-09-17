'use strict';

// Register `homePage` component, along with its associated controller and template
angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controllerAs: "homeCtrl",
    controller: ['$http',
      function HomePageController($http) {
        var self = this;

        self.articles = [{
          title: "Post1",
          content: "Eu sou um post com muito conteudo e informacao. Todos deveriam ler e aprender aqui.",
          articleby: "Autor1",
          date: "09/01/2017"
        },
        {
          title: "Post2",
          content: "Eu sou um post com muito conteudo e informacao. Todos deveriam ler e aprender aqui."
        }];

        function teste() {
          console.log("Eu funciono!")
        };
      }
    ]
  });
