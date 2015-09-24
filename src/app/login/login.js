(function () {
  'use strict';

  angular
    .module('test')
    .controller('LoginController', LoginController);

  function LoginController(Auth, $state) {
    var vm = this;

    vm.credentials = {
      username: '',
      password: ''
    };

    vm.login = login;

    function login(credentials) {
      Auth
        .login(credentials.username, credentials.password)
        .then(function(response) {
          if(response.data) {
            $state.go('accomplishments');
          }

          vm.credentials = {
            username: '',
            password: ''
          };
        }, function() {
          vm.credentials = {
            username: '',
            password: ''
          };
        });
    }
  }
})();
