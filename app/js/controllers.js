'use strict';

/* Controllers */

var taagamControllers = angular.module('taagamControllers', []);

taagamControllers.controller('CtgryListCtrl', ['$scope', '$http',
  function($scope, $http) {
	  $('#loadingWidget').show();
	  $http.get('http://smartdroidies.com/api/thuligal.php?service=ctgry').success(function(data) {
		$scope.categories = data;
		$('#loadingWidget').hide();
		$('#popup-error').hide();
	  }).error(function(data, status) {
		$('#loadingWidget').hide();
		$('#popup-content').html(jQuery.i18n.prop("error.network"));
		$('#popup-error').popup( "open");
	 });
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

  
  