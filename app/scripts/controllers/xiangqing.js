'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular.module("appApp")
	.controller('xiangqing', ['$scope', '$http', '$state', function($scope, $http, $state) {
		$scope.arr = [];
		$http({
				url: "http://47.88.16.225:406/news",
				method: "get",
		}).then(function(data) {
				console.log(data)
				$scope.quan = data.data;
				for(var i = 0; i < $scope.quan.length; i++) {
					$scope.arr.push($scope.quan[i].id);
				}
				for(var i = 0; i < $scope.arr.length; i++) {
					$http({
						url: "http://47.88.16.225:406/news/?id=" + localStorage.index,
						method: "get",
					}).then(function(data) {
						console.log(data)
						$scope.nei = data.data;
					})
				}
			})
	}])