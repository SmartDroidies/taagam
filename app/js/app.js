'use strict';

/* App Module */

var taagamApp = angular.module('taagamApp', [
  'ngRoute',
  'taagamControllers'
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
      otherwise({
        redirectTo: '/categories'
      });
  }]);
