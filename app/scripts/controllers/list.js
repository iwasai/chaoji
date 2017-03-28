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
	.controller('list',['$scope','$http','$state',function($scope,$http,$state){
		$scope.denglu = function(){
			$http({
				url:"http://47.88.16.225:406/users/login",
				method:"POST",
				data:{
					username:$scope.username,
					password:$scope.password,
					tel:$scope.phone,
					level:1
				}
			}).then(function(data){
				$scope.ti = data.data.uid;
				localStorage.setItem('ta',$scope.ti);
				console.log(data)
				alert('登陆成功')
				$http({
					method:"get",
					url:"http://47.88.16.225:406/users/?id="+localStorage.getItem('ta')
				}).then(function(e){
					console.log(e)
					if(e.data.level == 1){
						$state.go('home')
					}else{
						$state.go('admin')
					}
				})
			},function(){
				alert('登陆失败')
			})
		}
	}])
