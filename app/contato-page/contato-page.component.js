'use strict';

// Register `contatoPage` component, along with its associated controller and template
angular.
  module('contatoPage').
  component('contatoPage', {
    templateUrl: 'contato-page/contato-page.template.html',
    controllerAs: 'contatoCtrl',
    controller: ['$http', '$location',
      function ContatoPageController($http, $location) {
        self = this;
        
        //Variaveis
        self.submitted = false;
        self.user = null;

        //Metodos
        self.registraUser = registraUser

        function registraUser() {
          self.submitted = true;

          if(self.user && self.user.name && self.user.email){
            const api = 'https://skyfall-blog-dev.mybluemix.net/api/leads';
            var data = (self.user);
            var config = {
              headers : {
                'Content-Type': 'application/json'
              }
            }

            //Busca post no servidor
            $http.post(api, data, config).then(function(response) {
              if(response.status === 201 || response.status === 200){
                localStorage.setItem("hasSubscribe", true);
                $location.path('/obrigado').replace();
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