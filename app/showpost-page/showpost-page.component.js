'use strict';

// Register `showpostPage` component, along with its associated controller and template
angular.
  module('showpostPage').
  component('showpostPage', {
    templateUrl: 'showpost-page/showpost-page.template.html',
    controllerAs: 'showPostCtrl',
    controller: ['$http','$routeParams', '$sce',
      function ShowPostPageController($http, $routeParams, $sce) {
        var self = this;

        self.postId = $routeParams.postId;
        self.submitted = false;
        self.artigo = "";

        self.renderHtml = renderHtml;
        self.registraUser = registraUser;
        self.getPost = getPost;

        self.teste = teste;
        getPost(self.postId);

        function renderHtml(texto) {
          if(texto){
             return $sce.trustAsHtml(texto);
          }
          return "";
        }

        function registraUser() {
          self.submitted = true;
        }

        function getPost(id) {
          const api = 'https://skyfall-blog-dev.mybluemix.net/api/posts/find/';
          //const api = 'localhost:3000/api/posts/';
          //Busca post no servidor
          $http.get(api+id).then(function(response) {
            self.artigo = response.data;
            self.artigo.img = "blog_post_01.png"
           
          }, function(response) {
            console.log("Error ");
          });
        };

        function teste() {
          console.log(" Eu funciono!"+JSON.stringify(self.user))
        };
      }
    ]
  });
