'use strict';

// Register `showpostPage` component, along with its associated controller and template
angular.
  module('showpostPage').
  component('showpostPage', {
    templateUrl: 'showpost-page/showpost-page.template.html',
    controllerAs: 'showPostCtrl',
    controller: ['$http','$routeParams',
      function ShowPostPageController($http, $routeParams) {
        var self = this;

        self.postId = $routeParams.postId;

        self.artigo = "";

        self.getPost = getPost;
        self.teste = teste;
        getPost(self.postId);

        function getPost(id) {
          const api = 'https://skyfall-blog-dev.mybluemix.net/api/posts/find/';
          //const api = 'localhost:3000/api/posts/';
          //Busca post no servidor
          $http.get(api+id).then(function(response) {
            self.artigo = response.data;
                console.log("te "+JSON.stringify(response.data));
            
            if(response.status === 200){
              if(response.data.length > 0){
                console.log("te "+response.data.length);
              }else{
                console.log("te "+response.data.length);
                console.log("te "+JSON.stringify(response.data));
              }
            }else{
              console.log("te "+self.currentPage);
            }
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
