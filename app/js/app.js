'use strict';
/* App Module */
var taagamApp = angular.module('taagamApp', ['ngRoute', 'ngSanitize', 'ngTouch', 'pascalprecht.translate' ,'taagamControllers', 'taagamServices', 'cacheService', 'taagamFilters']);

taagamApp.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.
			when('/categories', {
				templateUrl : 'partials/categories.html',
				controller : 'CtgryListCtrl'
			}).
			when('/category/:category', {
				templateUrl : 'partials/category-items.html',
				controller : 'CtgryItemsCtrl'
			}).
			when('/item/:category/:id', {
				templateUrl : 'partials/item.html',
				controller : 'ItemDetailCtrl'
			}).
			when('/articles', {
				templateUrl : 'partials/articles.html',
				controller : 'ArticlesCtrl'
			}).
			when('/article/:id', {
				templateUrl: 'partials/acticle.html',
				controller: 'ArticleItemCtrl'
			}).
			otherwise({
				redirectTo : '/articles'
			});
		}
	]);
	
taagamApp.config(function ($translateProvider) {
        $translateProvider.translations('en', {
          TITLE: 'Hello',
          FOO: 'This is a paragraph.',
          BUTTON_LANG_EN: 'english',
          BUTTON_LANG_DE: 'german'
        });
        $translateProvider.translations('tn', {
          TITLE: '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd \u0ba4\u0bbe\u0b95\u0bae\u0bcd',
          FOO: 'Dies ist ein Paragraph.',
          BUTTON_LANG_EN: 'englisch',
          BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('tn');
      });
	