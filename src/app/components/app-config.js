(function () {
  'use strict';

  angular
    .module('test')
    .constant('appConfig', {
      apiEndpoint: 'http://atomicdevelopment.co/ng-test/public/index.php/api/'
    });

})();
