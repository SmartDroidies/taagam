
/* Services */ 

var taagamServices = angular.module('taagamServices', ['ngResource']);

/*
taagamServices.config(function ($httpProvider) {
    $httpProvider.defaults.headers.common = {'Access-Control-Allow-Origin':'http://localhost:8000'};
	$httpProvider.defaults.headers.common = ('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	$httpProvider.defaults.headers.common = ('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
}); 
*/

taagamServices.factory('Category', ['$resource',
  function($resource){
    return $resource('http://smartdroidies.com/api/thuligal.php?service=ctgry', {}, {
      query: {method:'GET', isArray:true}
    });
 }]);
 
taagamServices.factory('Articles', ['$resource',
  function($resource){
    var Articles = $resource('http://www.tamiltaagam.com/wp-json', {}, {
      query: {method:'GET', params: {}}
    });
	return Articles;
 }]);
 
//Factory for loading the feed
taagamServices.factory ('FeedService', ['$http', function ($http) {
	return {
		parseArticleFeed: function () {	
			var url = 'http://www.tamiltaagam.com/?feed=rss2&burst='+ getBurstDate();
			console.log('Loading New Data From Server = ' + url);
			return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
		}
	}
}]); 

/* Cache Services */
var cacheServices = angular.module('cacheService', []);
cacheServices.factory('cacheService', ['$cacheFactory', function ($cacheFactory) {
			return $cacheFactory('taagam-cache');
		}
	]);


function getBurstDate() {
	var d = new Date();
	var burstDate = d.getFullYear() + '' + d.getMonth() + '' + d.getDate() + '' + d.getHours();
	//var burstDate = presentDate.format("yyyy");
	return burstDate;
}
 
