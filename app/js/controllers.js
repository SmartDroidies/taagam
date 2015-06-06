'use strict';

/* Controllers */

var taagamControllers = angular.module('taagamControllers', []);

taagamControllers.controller('ArticlesCtrl', ['$scope', 'FeedService', 'cacheService',
  function($scope, Feed, cacheService) {
	$scope.loadFeed = function () {         
		var cache = cacheService.get('feed-articles');
		if(cache) {
			//console.log('Loading data from cache');
			$scope.articles = cache;
		} else {
			Feed.parseArticleFeed().then(function (res) {             
				//console.log(JSON.stringify(res.data.responseData.feed.entries));
				cacheService.put('feed-articles', res.data.responseData.feed.entries);
				$scope.articles = res.data.responseData.feed.entries;         
			});     
		}
		$('#loadingWidget').hide();
		$('#popup-error').hide();
	}
	$scope.reloadFeed = function () {         
		$("#app-status-ul").append('<li>Reload the feed now</li>');
		Feed.parseArticleFeed().then(function (res) {             
			//console.log(JSON.stringify(res.data.responseData.feed.entries));
			cacheService.put('feed-articles', res.data.responseData.feed.entries);
			$scope.articles = res.data.responseData.feed.entries;         
		});     
	}
	//Loading the feed
	$scope.loadFeed();
}]);

//Controller to collect individual article
taagamControllers.controller('ArticleItemCtrl', ['$scope', '$routeParams', 'FeedService', 'cacheService',
  function($scope, $routeParams, Feed, cacheService) {
	$scope.collectArticle = function () {    
		var cache = cacheService.get('feed-articles');
		if(cache) {
			//console.log('Loading data from cache');
			$scope.feeds = cache;
			$scope.size = cache.length;
			$scope.article = cache[$scope.index-1];
		} else {
			Feed.parseFeed().then(function (res) {             
				cacheService.put('feed-articles', res.data.responseData.feed.entries);
				cache = res.data.responseData.feed.entries;         
				$scope.size = cache.length;
				$scope.article = cache[$scope.index-1];
			});     
		}
		$scope.position = "(" + $scope.index + "/" + $scope.size + ")"; 
		//console.log($scope.article);
	};
	//console.log('Route Params : ' + $routeParams.title);	
	//Older Article  
	$scope.older = function () {
		$scope.index = ($scope.index < $scope.size) ? ++$scope.index : $scope.size;
		$scope.collectArticle();
	};
	
	//New Article
	$scope.newer = function () {	
		$scope.index = ($scope.index > 1) ? --$scope.index : 1;
		$scope.collectArticle();
	};
	
	$scope.share = function () {	
		window.plugins.socialsharing.share($scope.article.title, 'Taaga Thuligal',null,$scope.article.link);
	};

	//Collecting the particular article
	if($routeParams.id > 0) {
		$scope.index = $routeParams.id;  
	} else {
		$scope.index = 1;  
	}
	//Collecting the particular article
	$scope.collectArticle();
}]);

taagamControllers.controller('CtgryListCtrl', ['$scope', 'Category',
  function($scope, Category) {
	  $('#loadingWidget').show();
      $scope.categories = Category.query();
	  console.log($scope.categories);
	  $('#loadingWidget').hide();
	  $('#popup-error').hide();
	/*
	  $http.get('http://smartdroidies.com/api/thuligal.php?service=ctgry').success(function(data) {
		$scope.categories = data;
		$('#loadingWidget').hide();
		$('#popup-error').hide();
	  }).error(function(data, status) {
		$('#loadingWidget').hide();
		$('#popup-content').html(jQuery.i18n.prop("error.network"));
		$('#popup-error').popup( "open");
	 });
	 */
  }]);

taagamControllers.controller('CtgryItemsCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
	$('#loadingWidget').show();
	$http.get('http://smartdroidies.com/api/thuligal.php?service=' + $routeParams.category).success(function(data) {
      $scope.items = data;
	  $scope.category = $routeParams.category;
      $('#loadingWidget').hide();
	  $('#popup-error').hide();
    }).error(function(data, status) {
		$('#loadingWidget').hide();
		$('#popup-content').html(jQuery.i18n.prop("error.network"));
		$('#popup-error').popup( "open");
	});
  }]);

taagamControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
	$http.get('http://smartdroidies.com/api/thuligal.php?service=detail&ctgr=' + $routeParams.category + "&id="+ $routeParams.id).success(function(data) {
      $scope.item = data;
    });
}]);

  
  