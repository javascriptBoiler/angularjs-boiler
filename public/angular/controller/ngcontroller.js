(function (window, angular) {
    'use strict';

    var app = angular.module("ngcontroller", ['ui.router', 'ngservises']);

    app.controller('ngMainController', ['$scope', 'service1', function ($scope, service1) {
        $scope.callservice = function () {
            service1.alertthis();
        }
        $scope.greeting = 'Welcome from module1!';
    }]);

    app.controller('listController', ['$scope', function ($scope) {
        $scope.items = ['Banana', 'Apple', 'Orange'];
        $scope.greeting = 'Welcome to our stores';
    }]);

    app.controller('getApiDataController', ['$scope', 'apiService', function ($scope, apiService) {

        var Apicall = this;
        var url = 'https://jsonplaceholder.typicode.com/posts/1';
        Apicall.requestData = function () {
            apiService.getdata(url, function (response) {
                $scope.result = response
                console.log(response);
                
            })
        }
    }]);

    app.controller('tableController', ['$scope', function ($scope) {

        $scope.items = [
            {
                name: 'banana',
                price: 50
            },
            {
                name: 'orange',
                price: 10
            },
            {
                name: 'pineapple',
                price: 20
            }
        ];
    }]);

    

})(window, angular)