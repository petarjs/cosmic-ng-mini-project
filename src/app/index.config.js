(function() {
  'use strict';

  angular
    .module('test')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
