(function(){
	'use strict';
	angular.module('myApp').controller('CommonController',commoncontroller);

	function commoncontroller(DataService) {
		// body...
		var vm = this;

		vm.name = "Anurag Sharma";
		vm.loanAmount = DataService.amount;
	}
})()