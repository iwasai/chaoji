angular.module('appApp')
	.controller('word',['$scope','$http','$state',function($scope,$http,$state){
		$scope.arr =  [];
			$http({
				url:"http://47.88.16.225:406/users",
				method:"get"
			}).then(function(data){
				console.log(data)
				$scope.dd = data.data;
				for(var i = 0;i<$scope.dd.length;i++){
					$scope.arr.push($scope.dd[i])
				$scope.shanchu = function($index){
					$http({
						url:"http://47.88.16.225:406/news/?id="+$scope.arr[$index].id,
						method:"delete"
					}).then(function(data){
						console.log(data)
						$scope.data.splice($index,1)
					})
				
				}
				
				}
			})
			
	}])