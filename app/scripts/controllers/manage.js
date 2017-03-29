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
				result.innerHTML = "FileReader is not supported...";
				input.setAttribute('disabled', 'disabled');
			} else {
				input.addEventListener('change', readFile, false);
			}
		function readFile() {
			var file = this.files[0];
			if(!/image\/\w+/.test(file.type)) {
				alert("image only please.");
				return false;
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e) {
				var img = new Image,
					width = 640, //image resize
					quality = 0.8, //image quality
					canvas = document.createElement("canvas"),
					drawer = canvas.getContext("2d");
				img.src = this.result;
				img.onload = function() {
					canvas.width = width;
					canvas.height = width * (img.height / img.width);
					drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
					img.src = canvas.toDataURL("image/jpeg", quality);
					console.log(img.src);
					result.innerHTML = '<img src="' + img.src + '" alt=""/>';
					img_area.innerHTML = '<img src="' + img.src + '" alt="" class="imgSrc"/>';
				}
			}
		}
			$scope.arr = [];
			$scope.img = [];
			$scope.odd = function() {
				var img = document.getElementsByClassName('imgSrc')[0]
				var ding = document.getElementsByClassName('ding')[0]
				$scope.img = img.src
				ding.style.display = 'block'
				if(img.src == '') {
					alert('请插入图片')
					ding.style.display = 'none'
				} else {
					$http({
						url: Idz + "/anli2",
						method: "post",
						data: {
							img: $scope.img
						}
					}).then(function(data) {
						console.log(data)
						console.log(data)
						location.reload()
					})
				}

			}
			$http({
				url: Idz + "/anli2",
				method: "get",
			}).then(function(data) {
				console.log(data)
				for(var i = 0; i < data.data.length; i++) {
					$scope.arr.push(data.data[i])
					$scope.num = 0
					ye($scope.num, 4)
					$scope.btn1 = function(a) {
						$scope.num = a
						ye($scope.num, 4)
					}
					$scope.btn = function() {
						$scope.num--
							if($scope.num == -1) {
								$scope.num = 0
							}
						ye($scope.num, 4)
					}
					$scope.btn2 = function() {
						$scope.num++
							if($scope.num == Math.ceil($scope.arr.length / 4)) {
								$scope.num = Math.ceil($scope.arr.length / 4) - 1
							}
						ye($scope.num, 4)
					}

					function ye(a, b) {
						$scope.arr1 = $scope.arr.slice(a * b, a * b + b)
						$scope.arr2 = []
						for(var i = 0; i < Math.ceil($scope.arr.length / b); i++) {
							$scope.arr2.push({ n2: '' })
						}
						$scope.arr2[a].n2 = 'red'

					}

					$scope.shan = function($index) {
						console.log($index)
						$http({
							url: Idz + "/anli2/?id=" + $scope.arr[$index].id,
							method: "delete"
						}).then(function(data) {
							console.log(data)
							location.reload()
							$scope.arr.splice($index, 1)
						})
					}
				}

			})

		}
	])
	.controller('woqu', ['$scope', '$http', '$state', function($scope, $http, $state) {
		//		var u = 4;
		//		$scope.jiazai = function(){
		//			u+=4;
		$scope.arr = [];
		$http({
			url: Idz + "/anli2",
			method: "get",
		}).then(function(data) {
			console.log(data)
			for(var i = 0; i < data.data.length; i++) {
				$scope.arr.push(data.data[i])
			}
		})
		var index = 0
		a()

		function a() {
			$('.anli').delegate('.img1', 'click', function() {
				$('#right').css({ 'background': '#ce2122' })
				$('#left').css({ 'background': '#ce2122' })
				var index = $(this).index('.anli .img1')
				$('#lo').stop()
				$('.lobo').css({ 'display': 'block' })
				$('.lobo1').css({ 'display': 'block' })
				var l = $('#lo div').length
				var w = $('#lo div:nth-child(1)').width()
				$('#lo').width(l * 100 + 'vw')
				$('#lo').css({ 'left': -w * index })
				$('#right').click(function() {
					$('#left').css({ 'background': '#ce2122' })
					$('#lo').stop()
					index++
					if(index >= l - 1) {
						$('#right').css({ 'background': '#ccc' })
						index = l - 1
					}
					fn()
				})
				$('#left').click(function() {
					$('#right').css({ 'background': '#ce2122' })
					$('#lo').stop()
					index--
					if(index <= 0) {
						$('#left').css({ 'background': '#ccc' })
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