App.controller('searchController', ["$scope", "houseService", function($scope, houseService){
    $scope.getHouses = function(){
        houseService.getHouses().then(function(data){
        },function(error){
        })
    };
    (function(){
        $scope.getHouses();
    })()
}]);