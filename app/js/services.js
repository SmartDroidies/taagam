
/* Services */ 

var taagamServices = angular.module('taagamServices', ['ngResource']);

taagamServices.factory('Category', ['$resource',
  function($resource){
    return $resource('http://smartdroidies.com/api/thuligal.php?service=ctgry', {}, {
      query: {method:'GET', isArray:true}
    });
 }]);