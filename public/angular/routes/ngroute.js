(function (window, angular) {

    'use strict';


    //Angular application and configuration
    var app = angular.module("ngrouter", ['ui.router']);

    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

    	var home = {
            name: 'home',
            url: '/home',
            templateUrl: '/template/pages/home/index.html',
            
        };
        $stateProvider.state(home);


        var about = {
            name: 'about',
            url: '/about',
            templateUrl: '/template/pages/home/about.html',
            // controller:'ngMainController',
            
        };
        $stateProvider.state(about);

        var about = {
            
            
        };
        $stateProvider.state('page3', {
            url: '/page3',
            views: {
                '': { templateUrl: '/template/pages/home/page3.html' },
                'columnOne@page3': { template: '<div"><h2>Hey this is module1</h2> <br><br> <p>this page render two module in same time. This is the first module and second one is in right hand side </p></dev>' },
                'columnTwo@page3': { 
                    templateUrl: '/template/pages/home/table.html',
                    controller: 'tableController'
                }
            }
            
        })
        
        $stateProvider.state('home.mod1', {
            url: 'home/mod1',
            templateUrl: '/template/pages/home/list.html',
            controller: 'listController'
        })
        $stateProvider.state('home.gallery', {
            url: 'home/gallery',
            templateUrl: '/template/pages/home/galary.html',

        })
        

    }]);



})(window, angular);