(function(){
	'use strict';

	angular.module('myApp').filter('datefilter',datefilter);

	function datefilter(){
		return function(input){
			var op = input.split(' ')[0];

			return op;
		}
	}
})()