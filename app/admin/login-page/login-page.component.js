'use strict';

// Register `loginPage` component, along with its associated controller and template
angular.
  module('loginPage').
  component('loginPage', {
    templateUrl: 'admin/login-page/login-page.template.html',
    controllerAs: 'loginCtrl',
    controller: ['$http', '$location',
      function LoginPageController($http, $location) {
        self = this;
        self.userData = null;

        //Declarcao de metodos
        self.login = login;

        if(localStorage.getItem("userData")){
             $location.path('/admin/artigos').replace();
        } 

        function login() {
          if(self.userData && self.userData.login && self.userData.pass){
            const api = 'https://skyfall-blog-dev.mybluemix.net/api/users/authenticate';
            var data = (self.userData);
            var config = {
              headers : {
                'Content-Type': 'application/json'
              }
            }

            //Authentica usuario no servidor
            $http.post(api, data, config).then(function(response) {
              if(response.status === 201 || response.status === 200){
                var dadosUsuario = response.data.user;
                dadosUsuario.token = response.data.token;
                localStorage.setItem("userData", dadosUsuario);
                $location.path('/admin/artigos').replace();
              }else{
                console.log("Error status:"+response.status);
              }
            }, function(response) {
              console.log("Error ");
            });
          }
        }

      }
    ]
  });
