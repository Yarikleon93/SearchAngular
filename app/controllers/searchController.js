App.controller('searchController', ["$scope", 
                                    "houseService",
                                    "$route",
                                    "$location",
                                    "$routeParams", 
                                    SearchController]);

function SearchController($scope, houseService, $route, $location, $routeParams){
    $scope.getHouses = function(){
        houseService.getHouses().then(function(data){
        },function(error){
        })
    };
    
    (function(){
        $scope.getHouses();
    })()
}