'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular.module('appApp')
	.controller('yan',['$scope','$http','$state',function($scope,$http,$state){
		$scope.arr =  [];
			$http({
				url:Idz+"/users",
				method:"get"
			}).then(function(data){
				console.log(data)
				$scope.dd = data.data;
				for(var i = 0;i<$scope.dd.length;i++){
					$scope.arr.push($scope.dd[i])
					$scope.shanchu = function($index){
						$http({
							url:Idz+"/users/?id="+$scope.arr[$index].id,
							method:"delete"
						}).then(function(data){
							console.log(data)
							$scope.arr.splice($index,1)
						})
					
					}
				
				}
			})
			
	}])
	
	.controller('anli',['$scope','$http','$state',function($scope,$http,$state){
		$scope.xinwen = '';
		$scope.fabu = function(){
			alert($scope.xinwen)
			$http({
				url:Idz+"/news",
				method:"post",
				data:{
					content:$scope.xinwen,
					title:$scope.biaoti,
					from:$scope.laizi,
					time:$scope.shijian,
					site:$scope.laiyuan
				}
			}).then(function(data){
				console.log(data)
			})
		}
			$scope.aty = [];
			$http({
				url:Idz+"/news",
				method:"get",
			}).then(function(data){
				$scope.quan = data.data;
				for(var i = 0;i<$scope.quan.length;i++){
						$scope.aty.push($scope.quan[i])
						$scope.shan = function($index){
							$http({
								url:Idz+"/news/?id="+$scope.aty[$index].id,
								method:"delete"
							}).then(function(data){
								console.log(data)
								$scope.aty.splice($index,1)
							})
					
						}
				}
				
			})
			
	}])
