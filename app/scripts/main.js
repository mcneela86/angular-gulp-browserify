(function () {

	'use strict';

	// Require third party libs
	require('jquery');
	var angular = require('angular');
	require('angular-ui-router');
	require('angular-animate');

	// Require my modules
	var onConfig = require('./config.js');
	var homeCtrl = require('./controllers/HomeCtrl');
	var aboutCtrl = require('./controllers/AboutCtrl');

	// Dependency injection
	var requires = [
		'ui.router',
		'ngAnimate'
	];

	// Initialise app
	var app = angular.module('myApp', requires);

	// Use my modules in order
	app.config(onConfig);
	app.controller('HomeCtrl', ['$scope', homeCtrl]);
	app.controller('AboutCtrl', ['$scope', aboutCtrl]);

}());