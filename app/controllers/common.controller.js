(function(){
	'use strict';
	angular.module('myApp').controller('CommonController',commoncontroller);

	function commoncontroller() {
		// body...
		var vm = this;

		vm.name = "Parent Controller";
	}
})()