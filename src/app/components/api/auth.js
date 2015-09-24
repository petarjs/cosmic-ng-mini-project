(function () {
  'use strict';

  angular
    .module('test')
    .service('Auth', Auth);

  function Auth($http, appConfig, $rootScope, $state) {
    return {
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn
    };

    function login(username, password) {
      return $http
        .post(appConfig.apiEndpoint.concat('login'), {
          username: username,
          password: password
        })
        .then(function(response) {
          $http.defaults.headers.common['X-Auth-Token'] = response.data.api_key;
          $rootScope.user = response.data;

          return response;
        });
    }

    function logout() {
      $rootScope.user = null;
      $http.defaults.headers.common['X-Auth-Token'] = '';
      $state.go('login');
    }

    function isLoggedIn() {
      return !!$rootScope.user;
    }
  }
})();
