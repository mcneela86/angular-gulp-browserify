'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/partials/partial-home.html',
            controller: 'HomeCtrl as home'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/partials/partial-about.html',
            controller: 'AboutCtrl as about'    
        });
}

module.exports = OnConfig;