(function () {
  'use strict';

  angular
    .module('test')
    .controller('AccomplishmentsController', AccomplishmentsController);

  function AccomplishmentsController($http, appConfig) {
    var vm = this;

      vm.addAccBtn = true;
      vm.accDate = Date.now();

      vm.addNew = function() {
          vm.addAccBtn = false;
          console.log('test');
      }

      vm.addAccomplishment = function(user) {
          $http.post(appConfig.apiEndpoint.concat('accomplishments'), {
              user_id: user,
              description: vm.acc,
              date: vm.date
          }).then(function(response) {
              console.log(response);
              // hide form
              vm.addAccBtn = true;
              // reset input fields
              vm.acc = '';
              vm.date = '';
          });

          //console.log('add' + user);
      }

      $http.get(appConfig.apiEndpoint.concat('accomplishments'))
          .then(function(response) {
              vm.accData = response.data;
              console.log(vm.accData);
          });
  }

    AccomplishmentsController.$inject = ['$http', 'appConfig'];
})();
