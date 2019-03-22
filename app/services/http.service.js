(function(){
	'use strict';

    angular.module('myApp').service('HttpService',httpservice);
    
    httpservice.$inject = ['$http'];

	function httpservice($http) {
		// body...
        this.baseUrl = "https://jsonplaceholder.typicode.com";

        
        this.get = function(url){
            return $http.get(
                this.baseUrl+url
            )
        }
	}
})()