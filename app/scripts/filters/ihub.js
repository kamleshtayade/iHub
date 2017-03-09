'use strict';

/**
 * @ngdoc filter
 * @name iHubApp.filter:ihub
 * @function
 * @description
 * # ihub
 * Filter in the iHubApp.
 */
angular.
  module('core')
  .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  })
  .filter('facetFilter',function(){    
    return function(input){
      var newArray = [];
      for(var x=0;x<input.length;x+=2){
        newArray.push(input[x]);
      }
      return newArray;
    }
  });
