(function(){
	'use strict';
	angular.module('myApp').controller('CommonController',commoncontroller);

	function commoncontroller(HttpService) {
		// body...
		var vm = this;
		vm.userAlbum = [];
		vm.userPics = [];
		vm.showUsers = true;
		vm.showAlbums = false;
		vm.showPics = false;

		vm.getUserAlbum = getUserAlbum;
		vm.getPics = getPics;
		vm.backToUserList = backToUserList;
		vm.backToAlbum = backToAlbum;
		
		
		function activate() {
			HttpService.get('/users').then(function(res) {
				console.log(res.data);
				vm.users = res.data;
			});
		}

		function getUserAlbum(userId) {
			HttpService.get('/albums?userId='+userId).then(function(res){
				console.log(res.data);
				vm.userAlbum = res.data;
				vm.showUsers = false;
				vm.showAlbums = true;
				vm.showPics = false;
			})
		}

		function getPics(albumId){
			HttpService.get('/photos?albumId='+albumId).then(function(res){
				console.log(res.data);
				vm.userPics = res.data;
				vm.showUsers = false;
				vm.showAlbums = false;
				vm.showPics = true;
			});
		}

		function backToUserList(){
			vm.userAlbum = [];
			vm.showUsers = true;
			vm.showAlbums = false;
		}

		function backToAlbum(){
			vm.userPics = [];
			vm.showAlbums = true;
			vm.showPics = false;
		}

		activate();
	
	}
})()