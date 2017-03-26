var App = angular.module('App' , ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider.when('/', {
            templateUrl: '/app/views/home.html',
            controller: 'mainController'
        })
        .when('/search/:q',{
            templateUrl: "/app/views/search.html",
            controller: "searchController"
        })
        $locationProvider.html5Mode(true);
    });