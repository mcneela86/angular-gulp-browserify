(function () {

	'use strict';

	// Require third party libs
	var angular = require('angular');
	var router = require('angular-ui-router');

	// Require my modules
	var onConfig = require('./config.js');
	var homeCtrl = require('./controllers/HomeCtrl');
	var aboutCtrl = require('./controllers/AboutCtrl');

	// Dependency injection
	var requires = [
		'ui.router'
	];

	// Initialise app
	var app = angular.module('myApp', requires);

	// Use my modules in order
	app.config(onConfig);
	app.controller('HomeCtrl', ['$scope', homeCtrl]);
	app.controller('AboutCtrl', ['$scope', aboutCtrl]);

}());