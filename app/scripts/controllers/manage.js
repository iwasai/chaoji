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
	.controller('manage', ['$scope', '$http', '$state', function($scope, $http, $state) {
		
		var input = document.getElementById("file");
		var result = document.getElementById("result");
		var img_area = document.getElementById("image-wrap");
		
		if(typeof(FileReader) === 'undefined') {
			result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
			input.setAttribute('disabled', 'disabled');
		} else {
			input.addEventListener('change', readFile, false);
		}
	function readFile() {
		var file = this.files[0];
		//这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件 
		if(!/image\/\w+/.test(file.type)) {
			alert("请确保文件为图像类型");
			return false;
		}
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e) {
			result.innerHTML = '<img src="' + this.result + '" alt=""/>';
			img_area.innerHTML = '<img src="' + this.result + '" alt="" class="imgSrc"/>'
		}
	}
		
		$scope.arr = [];
		$scope.img = []
		$scope.odd = function() {
			var img = document.getElementsByClassName('imgSrc')[0]
			$scope.img = img.src
			if(img.src == ''){
				alert('hahha')
			}else{
				$http({
				url: "http://47.88.16.225:406/anli",
				method: "post",
				data: {
					img: $scope.img
				}
			}).then(function(data) {
				console.log(data)
				location.reload()
			})
			}
			
		}
		$http({
			url: "http://47.88.16.225:406/anli",
			method: "get",
		}).then(function(data) {
			console.log(data)
			for(var i = 0; i < data.data.length; i++) {
				$scope.arr.push(data.data[i])
				$scope.num = 0
				ye($scope.num,4)
				$scope.btn1 = function(a){
					$scope.num = a
					ye($scope.num,4)
				}
				$scope.btn = function(){
					$scope.num--
					if($scope.num == -1){
						$scope.num = 0
					}
					ye($scope.num,4)
				}
				$scope.btn2 = function(){
					$scope.num++
					if($scope.num == Math.ceil($scope.arr.length/4)){
						$scope.num = Math.ceil($scope.arr.length/4)-1
					}
					ye($scope.num,4)
				}
			function ye(a,b){
				$scope.arr1 = $scope.arr.slice(a*b,a*b+b)
				$scope.arr2 = []
				for(var i=0;i<Math.ceil($scope.arr.length/b);i++){
					$scope.arr2.push({n2:''})
				}
				$scope.arr2[a].n2 = 'red'
				
			}
				
				$scope.shan = function($index){
					console.log($index)
					$http({
						url: "http://47.88.16.225:406/anli/?id="+$scope.arr[$index].id,
						method: "delete"
					}).then(function(data){
						console.log(data)
						$scope.arr.splice($index,1)
					})
				}
			}
			
				
		})
		
		
	}])
	.controller('woqu', ['$scope', '$http', '$state', function($scope, $http, $state) {
//		var u = 4;
//		$scope.jiazai = function(){
//			u+=4;
		$scope.arr = [];
			$http({
				url: "http://47.88.16.225:406/anli",
				method: "get",
			}).then(function(data) {
				console.log(data)
				for(var i = 0; i < data.data.length; i++) {
					$scope.arr.push(data.data[i])
				}
			})
			var index = 0
		a()
		function a(){
			$('.anli').delegate('.img1', 'click', function() {
			$('#right').css({'background':'#ce2122'})
			$('#left').css({'background':'#ce2122'})
			var index = $(this).index('.anli .img1')
			$('#lo').stop()
			$('.lobo').css({ 'display': 'block' })
			$('.lobo1').css({ 'display': 'block' })
			var l = $('#lo div').length
			var w = $('#lo div:nth-child(1)').width()
			$('#lo').width(l * 100 + 'vw')
			$('#lo').css({ 'left': -w * index })
			$('#right').click(function() {
				$('#left').css({'background':'#ce2122'})
				$('#lo').stop()
				index++
				if(index >= l - 1) {
					$('#right').css({'background':'#ccc'})
					index = l - 1
				}
				fn()
			})
			$('#left').click(function() {
				$('#right').css({'background':'#ce2122'})
				$('#lo').stop()
				index--
				if(index <= 0) {
					$('#left').css({'background':'#ccc'})
					index = 0
				}
				fn()
			})
			$('.lobo1').click(function() {
				$('.lobo').css({ 'display': 'none' })
				$('.lobo1').css({ 'display': 'none' })
				index = 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
				                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
			})
			function fn() {
				$('#lo').animate({
					left: -w * index
				})
			}
		})
		}
	}])
