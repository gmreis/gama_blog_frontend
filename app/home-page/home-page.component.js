'use strict';

// Register `homePage` component, along with its associated controller and template
angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controllerAs: "homeCtrl",
    controller: ['$http', '$sce',
      function HomePageController($http, $sce) {
        var self = this;

        self.articles = [];

        self.currentPage = 1;
        self.hasNext = false;
        self.submitted = false;

        self.getPost = getPost;
        self.registraUser = registraUser;
        self.getFaceImg = getFaceImg
        self.renderHtml = renderHtml;

        self.getNextPosts = getNextPosts;
        self.getPrevPosts = getPrevPosts;

        self.teste = teste;
        getPost(self.currentPage);

        function registraUser() {
          self.submitted = true;
        }

        function renderHtml(texto) {
          if(texto){
             return $sce.trustAsHtml(texto);
          }
          return "";
        }

        function getFaceImg(originalString){
          var result = "../img/"+originalString.replace("blog", "face");
          return result;
        }

        function getPost(pageNumber) {
          const api = 'https://skyfall-blog-dev.mybluemix.net/api/posts/';
          //const api = 'localhost:3000/api/posts/';
          //Busca post no servidor
          $http.get(api+pageNumber).then(function(response) {
            self.articles = response.data;
            if(response.status === 200){
              if(response.data.length > 0){
              }else{
              }
            }else{
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

          console.log("Eu funciono! ");
        };
      }
    ]
  });
