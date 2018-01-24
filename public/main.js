(function (window, angular) {

    'use strict';


    //Angular application and configuration
    var app = angular.module("App1", ['ngrouter','ngservises','ngcontroller']);

    
    //Bootstrap the angular application
    angular.bootstrap(document, ['App1'], {
        strictDi: true
    });

})(window, angular);