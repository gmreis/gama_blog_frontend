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

        self.articles = [];

        self.currentPage = 1;
        self.hasNext = false;

        self.getPost = getPost;
        self.getNextPosts = getNextPosts;
        self.getPrevPosts = getPrevPosts;

        self.teste = teste;
        getPost(self.currentPage);

        function getPost(pageNumber) {
          const api = 'https://skyfall-blog-dev.mybluemix.net/api/posts/';
          //const api = 'localhost:3000/api/posts/';
          //Busca post no servidor
          $http.get(api+pageNumber).then(function(response) {
            self.articles = response.data;
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

        function getPrevPosts() {
          if(self.currentPage > 1){
             self.currentPage--;
          }
          //Desabilita o botao case for a primeira pagina
          if(self.currentPage == 1){
            self.hasNext = false;
          }
        };

        function getNextPosts() {
          self.currentPage++;
          if(self.currentPage > 1){
            self.hasNext = true;
          }
        };

        function teste() {
          console.log("Eu funciono!")
        };
      }
    ]
  });
