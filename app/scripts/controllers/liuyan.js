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
	.controller('words', ['$scope', '$http', '$state', function($scope, $http, $state) {
			//		$scope.username = localStorage.getItem('username')
			$scope.xingming = "";
			$scope.youxiang = "";
			$scope.dianhua = "";
			$scope.neiron = "";
			$scope.ts = false;
			$scope.ly = false;
			$scope.tianjia = function() {
				if($scope.xingming == "") {
					$scope.ts = true;
					$scope.hide = function() {
						$scope.ts = false;
					}
					} else if($scope.neiron == "") {
						$scope.ly = true;
						$scope.ly_hide = function() {
						$scope.ly = false;
					}
				} else {
					$http({
						url: Idz+"/users/?id=" + localStorage.getItem('ta'),
						method: "POST",
						data: {
							name:$scope.xingming,
							content:$scope.neiron
						}
					}).then(function(data) {
						console.log(data)
						$state.go('word')
					})
				}
			}
		}
	])