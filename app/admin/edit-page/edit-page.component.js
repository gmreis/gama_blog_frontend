'use strict';

// Register `editPage` component, along with its associated controller and template
angular.
  module('editPage').
  component('editPage', {
    templateUrl: 'admin/edit-page/edit-page.template.html',
    controllerAs: 'editCtrl',
    controller: ['$http', '$location', '$routeParams',
      function EditPageController($http, $location, $routeParams) {
        self = this;

        self.postId = $routeParams.artigoId;
        self.post = "";
        self.postNovo = true;

        //Declarcao de metodos
        self.getPost = getPost;
        self.updatePost = updatePost;

        if(!localStorage.getItem("userData")){
             // $location.path('/home').replace();
        }else{
          if(self.postId !== "novo"){
            getPost(self.postId);
            self.postNovo = false;
          }
        }

        function updatePost() {
          if(postNovo){
            var data = (self.post);
            var config = {
              headers : {
                'Content-Type': 'application/json'
              }
            }
            //Busca post no servidor
            $http.post('https://skyfall-blog-dev.mybluemix.net/api/leads', data, config).then(function(response) {
              if(response.status === 201 || response.status === 200){
                console.log("sucesso: "+response.status);
              }else{
                console.log("Error status:"+response.status);
              }
            }, function(response) {
              console.log("Error ");
            });
          }else{
            var data = (self.post);
            var config = {
              headers : {
                'Content-Type': 'application/json'
              }
            }
            //Busca post no servidor
            $http.put('https://skyfall-blog-dev.mybluemix.net/api/leads', data, config).then(function(response) {
              if(response.status === 201 || response.status === 200){
                console.log("sucesso: "+response.status);
              }else{
                console.log("Error status:"+response.status);
              }
            }, function(response) {
              console.log("Error ");
            });
          }
        };

        function getPost(id) {
          $http.get('https://skyfall-blog-dev.mybluemix.net/api/posts/find/'+id).then(function(response) {
            self.post = response.data;
          }, function(response) {
            console.log("Error ");
          });
        };
      }
    ]
  });
