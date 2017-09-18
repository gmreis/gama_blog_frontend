'use strict';

// Register `postPage` component, along with its associated controller and template
angular.
  module('postPage').
  component('postPage', {
    templateUrl: 'post-page/post-page.template.html',
    controllerAs: 'postCtrl',
    controller: ['$http',
      function PostPageController($http) {
        var postController = this;
        
        postController.artigo = {
          "autor" : '',
          "title" : '',
          "conteudo" : '',
          "imagem" : '',
          "data" : null
        };

        postController.teste = teste;

        function teste() {
          console.log(" Eu funciono!")
        };
      }
    ]
  });
