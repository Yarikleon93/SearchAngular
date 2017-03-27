App.controller('mainController', ["$scope", 
                                    "houseService",
                                    "$route",
                                    "$location",
                                    "$routeParams", 
                                    MainController]);

function MainController($scope, houseService, $route, $location, $routeParam){
    $scope.getHouses = function(){
        houseService.getHouses().then(function(data){
        },function(error){
        })
    };

    $scope.navigateToSearch = function (query) {
        $location.path('/search/' + query)
    };

    (function(){
        $scope.getHouses();
    })()
}