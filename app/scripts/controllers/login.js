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
.controller('login',['$scope','$http','$state',function($scope,$http,$state){
	
	$(function(){
		var useryz=/^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/;
		var user,pwd,name,email,phone;
		$("#yhm").bind('input propertychange',function(){
			if($(this).val().match(useryz)){				
					user=true;
					$(this).next().html('√').css({'color':'#080','fontSize':'1rem'});
					$("#click").removeAttr("disabled","disabled");
			}else{
				if($(this).val()==""){
					$(this).next().html('');
				}else{
					$(this).next().html('用户名不能含有非法字符，长度为3-16位字符').css({'color':'red','fontSize':'0.5rem'});
					$("#click").attr("disabled","disabled");
				}
			}
		})
		var pwdyz=/^\w{6,}$/;
		$("#pwd").bind('input propertychange',function(){
			if($(this).val().match(pwdyz)){
				pwd=true;
				$(this).next().html('√').css({'color':'#080','fontSize':'1rem'});
				$("#click").removeAttr("disabled","disabled");
			}else{
				if($(this).val()==""){
					$(this).next().html('');
				}else{
					$(this).next().html('密码长度不能少于6位').css({'color':'red','fontSize':'0.5rem'});
					$("#click").attr("disabled","disabled");
				}
			}
		})
		var emailyz=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		$("#eml").bind('blur',function(){
			if($(this).val().match(emailyz)){
				email=true;
				$(this).next().html('√').css({'color':'#080','fontSize':'1rem'});
				$("#click").removeAttr("disabled","disabled");
			}else{
				if($(this).val()==""){
					$(this).next().html('');
				}else{
					$(this).next().html('请填写正确的邮箱').css({'color':'red','fontSize':'0.5rem'});
					$("#click").attr("disabled","disabled");
				}
			}
		})
		var phoneyz=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
		$("#phe").bind('input propertychange',function(){
			if($(this).val().match(phoneyz)){
				email=true;
				$(this).next().html('√').css({'color':'#080','fontSize':'1rem'});
				$("#click").removeAttr("disabled","disabled");
			}else{
				if($(this).val()==""){
					$(this).next().html('');
				}else{
					$(this).next().html('请填写正确的手机号码').css({'color':'red','fontSize':'0.5rem'});
					$("#click").attr("disabled","disabled");
				}
			}
		})
	})
	
	
	$scope.username = '';
	$scope.password = '';
	$scope.name = '';
	$scope.email = '';
	$scope.phone = '';
	$scope.zhuce = function(){
		if($scope.username==''){
			alert('请输入用户名');
		}else if($scope.password==''){
			alert('请输入密码');
		}else if($scope.name==''){
			alert('请输入您的姓名');
		}else if($scope.email==''){
			alert('请输入您的邮箱地址');
		}else if($scope.phone==''){
			alert('请输入您的电话号码');
		}else{
			$http({
				url:"http://47.88.16.225:406/users",
				method:"POST",
				data:{
					username:$scope.username,
					password:$scope.password,
					name:$scope.name,
					email:$scope.email,
					tel:$scope.phone,
					liuyan:$scope.liuyan,
					level:1
				}
			}).then(function(data){
				console.log(data)
				alert('注册成功')
				localStorage.setItem('username',$scope.username);
				localStorage.setItem('password',$scope.password);
				localStorage.setItem('name',$scope.name);
				localStorage.setItem('email',$scope.email);
				localStorage.setItem('phone',$scope.phone);
				localStorage.setItem('liuyan',$scope.liuyan);
				$state.go('list')
			},function(data){
				console.log(data)
				alert('注册失败')
			})
		}
		
	}
}])	
