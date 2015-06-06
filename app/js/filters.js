'use strict';

/* Filters */
var taagamFilters = angular.module('taagamFilters',  []);

taagamFilters.filter('todate', function($filter) {
	return function(input) {
		var _date = $filter('date')(new Date(input), 'MMM d, y h:mm a');
		return _date; 
	};
});

taagamFilters.filter('feedicon', function($filter) {
	return function(input) {
		var start = "src=\"";
		var end = "\"";
		var temp = input.substring(input.indexOf(start)+5);
		var imageSrc = temp.substring(0,temp.indexOf(end));
		return '<img class="feed-icon" src=' +  imageSrc + '>' ; 
	};
});