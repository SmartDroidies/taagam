'use strict';
/* App Module */
var taagamApp = angular.module('taagamApp', [
  'ngRoute', 'taagamControllers', 'taagamServices'
]);


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
