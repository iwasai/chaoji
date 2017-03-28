'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular.module('appApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('list', {
				url: '/list',
				templateUrl: 'views/list.html'
			})
			.state('liuyan', {
				url: '/liuyan',
				templateUrl: 'views/liuyan.html'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html'
			})
			.state('admin', {
				url: '/admin',
				templateUrl: 'views/admin.html'
			})
			.state('manage', {
				url: '/manage',
				templateUrl: 'views/manage.html'
			})
			.state('words', {
				url: '/words',
				templateUrl: 'views/words.html'
			})
			.state('news', {
				url: '/news',
				templateUrl: 'views/news.html'
			})
			.state('anli', {
				url: '/anli',
				templateUrl: 'views/anli.html'
			})
			.state('aboutwe', {
				url: '/aboutwe',
				templateUrl: 'views/aboutwe.html'
			})
			.state('xiangqing', {
				url: '/xiangqing',
				templateUrl: 'views/xiangqing.html'
			})
			.state('word', {
				url: '/word',
				templateUrl: 'views/word.html'
			})
		$urlRouterProvider.otherwise('/list')
	}])
	var Idz = 'http://47.88.16.225:406';
	function Top(){
			$('body').animate({scrollTop:0});
		}
		$("#Top").on({
			'touchstart':function(){
				Top();	
			}
		})