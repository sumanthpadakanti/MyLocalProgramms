var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
     .when("/home", {
        templateUrl : "views/home.html"
    })
    .when("/page0", {
        templateUrl : "views/page0.html"
    })
    .when("/xyz", {
        templateUrl : "views/page1.html"
    })
    .when("/page2", {
        templateUrl : "views/page2.html"
    })
    .otherwise('/home')
});
      