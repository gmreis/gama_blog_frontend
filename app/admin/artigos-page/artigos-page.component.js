'use strict';

// Register `artigosPage` component, along with its associated controller and template
angular.
  module('artigosPage').
  component('artigosPage', {
    templateUrl: 'admin/artigos-page/artigos-page.template.html',
    controllerAs: 'artigosCtrl',
    controller: ['$http', '$location',
      function ArtigosPageController($http, $location) {
        self = this;
        self.artigos = [];

        if(!localStorage.getItem("userData")){
             $location.path('/home').replace();
        } 

        //Declarcao de metodos
        self.logout = logout;
        self.deleteArtigo = deleteArtigo;
        self.updateArtigo = updateArtigo;
        self.novoArtigo = novoArtigo;
        self.getArtigos = getArtigos

        getArtigos();

        const api = 'https://skyfall-blog-dev.mybluemix.net/api/';

        function deleteArtigo(postID) {
          $http.delete(api+"posts/"+postID).then(function(response) {
            if(response.status === 201 || response.status === 200){
              // console.log("Sucesso "+response.status);
              self.getArtigos();
            }else{
              console.log("Error status:"+response.status);
            }
          }, function(response) {
            console.log("Error ");
          });
        }

        function updateArtigo(id) {
           $location.path('/admin/artigos/'+id).replace();
        }

        function novoArtigo() {
          $location.path('/admin/artigos/novo').replace();
        }

        function logout() {
          localStorage.removeItem("userData");
          $location.path('/home').replace();
        }

        function getArtigos(pageNumber) {
          $http.get(api+"posts/"+pageNumber).then(function(response) {
            self.artigos = response.data.rows;
            if(response.status === 201 || response.status === 200){
              // console.log("Sucesso "+response.status);
            }else{
              console.log("Error status:"+response.status);
            }
          }, function(response) {
            console.log("Error ");
          });
        };
      }
    ]
  });
