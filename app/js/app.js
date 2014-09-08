'use strict';
/* App Module */
var taagamApp = angular.module('taagamApp', [
  'ngRoute',
  'taagamControllers'
]);


// Response Interceptor 
/*
taagamApp.config(['$httpProvider', function ($httpProvider) {
    var $http,
        interceptor = ['$q', '$injector', function ($q, $injector) {
            var error;

            function success(response) {
                // get $http via $injector because of circular dependency problem
                $http = $http || $injector.get('$http');
                if($http.pendingRequests.length < 1) {
                    $('#loadingWidget').hide();
                }
                return response;
            }

            function error(response) {
                // get $http via $injector because of circular dependency problem
                $http = $http || $injector.get('$http');
                if($http.pendingRequests.length < 1) {
                    $('#loadingWidget').hide();
                }
                return $q.reject(response);
            }

            return function (promise) {
                $('#loadingWidget').show();
                return promise.then(success, error);
            }
        }];
    $httpProvider.responseInterceptors.push(interceptor);
}]);
*/
taagamApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/categories', {
        templateUrl: 'partials/categories.html',
        controller: 'CtgryListCtrl'
      }).
      when('/category/:category', {
        templateUrl: 'partials/category-items.html',
        controller: 'CtgryItemsCtrl'
      }).
      when('/item/:category/:id', {
        templateUrl: 'partials/item.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        redirectTo: '/categories'
      });
  }]);
