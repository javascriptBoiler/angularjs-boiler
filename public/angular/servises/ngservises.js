(function(window,angular){

	'use strict';

	var app = angular.module("ngservises",['ui.router']);
	app.factory("service1",['$http',function($http){
		var service1 = {}

		service1.alertthis= function(){
			alert("hello service is working")
		}
		return service1;

	}]);

	app.factory("apiService",['$http',function($http){
		var apicall = {}

		apicall.getdata= function (path, callback) {
			$http({
                url: path,
                method: 'GET',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                data: "Email"
            }).then(function (success) {
                callback(success.data);
            }, function (error) {
                callback(error.data);
            });
		}
		return apicall;

	}]);

})(window, angular)