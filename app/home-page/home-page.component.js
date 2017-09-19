'use strict';

// Register `homePage` component, along with its associated controller and template
angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controllerAs: "homeCtrl",
    controller: ['$http', '$sce', '$location',
      function HomePageController($http, $sce, $location) {
        var self = this;

        self.articles = [];
        //Registro Lead
        self.user = null;

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

          if(self.user){
            const api = 'https://skyfall-blog-dev.mybluemix.net/api/leads';
            var data = (self.user);
            var config = {
              headers : {
                'Content-Type': 'application/json'
              }
            }

            //Busca post no servidor
            $http.post(api, data).then(function(response) {
              if(response.status === 200){
                $location.path('/obrigado').replace();
              }else{
                console.log("Error status:"+response.status);
              }
            }, function(response) {
              console.log("Error ");
            });
          }
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

          console.log("Eu funciono! "+JSON.stringify(self.user))
        };
      }
    ]
  });
