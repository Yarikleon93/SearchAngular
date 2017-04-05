var App = angular.module('App' , ['ngSanitize', 'ngRoute'])
    .config(function($routeProvider,$locationProvider){
        $routeProvider.when('/', {
            templateUrl: '/app/views/home.html',
            controller: 'mainController'
        })
        .when('/search/:q',{
            templateUrl: "/app/views/search.html",
            controller: "searchController"
        })
        .when('/apartment/:longitude', {
            templateUrl: "/app/views/apartment.html",
            controller: "apartmentController"
        })
    });