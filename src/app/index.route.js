(function() {
  'use strict';

  angular
    .module('test')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        auth: false
      })
      .state('accomplishments', {
        url: '/accomplishments',
        templateUrl: 'app/accomplishments/accomplishments.html',
        controller: 'AccomplishmentsController',
        controllerAs: 'accCtrl',
        auth: true
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
