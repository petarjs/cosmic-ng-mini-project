(function() {
  'use strict';

  angular
    .module('test')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, Auth, $rootScope) {

    $log.debug('runBlock end');

    $rootScope.logout = function() {
      Auth.logout();
    };

    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.auth && !Auth.isLoggedIn()){
        Auth.logout();
        event.preventDefault();
      } else if(!toState.auth && Auth.isLoggedIn()) {
        event.preventDefault();
      }
    });
  }

})();
