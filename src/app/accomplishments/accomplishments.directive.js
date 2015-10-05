(function() {
    'use strict';

    function userAcc($http, appConfig) {
        return {
            restrict: 'AE',
            scope: {
                acc: '='
            },
            templateUrl: '/app/accomplishments/accomplishments.view.html',
            link: function(scope, elem, attr) {
                scope.addAccomplishment = function(user, type) {
                    console.log(type + user+' +1');
                    $http.put(appConfig.apiEndpoint.concat('accomplishments')+'/'+user+'/reward?type='+type)
                        .success(function(response) {
                            //scope.beers = response.data.beers;
                            //scope.coffees = response.data.coffees;
                            console.log(response);
                        })
                        .error(function(error) {
                            console.log(error);
                        });
                }
            }
        }
    };

    angular
        .module('test')
        .directive('userAcc', userAcc);

    userAcc.$inject = ['$http', 'appConfig'];

})();