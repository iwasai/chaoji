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
	.controller('jgr',['$scope','$http','$state',function($scope,$http,$state){
		$http({
				url:Idz+"/news",
				method:"get",
			}).then(function(data){
				console.log(data)
				$scope.quan = data.data;
			})
		$scope.di = function($index){
			$scope.arr = [];
			$http({
					url: Idz+"/news",
					method: "get",
			}).then(function(data) {
				$state.go('xiangqing')
					$scope.quan = data.data;
					for(var i = 0; i < $scope.quan.length; i++) {
						$scope.arr.push($scope.quan[i].id);
					}
					for(var i = 0; i < $scope.arr.length; i++) {
						localStorage.index=$scope.arr[$index]
					}
				})
		}
		
	}])
	