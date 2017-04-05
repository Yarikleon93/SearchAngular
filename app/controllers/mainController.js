App.controller('mainController', ["$scope", 
                                    "houseService",
                                    "$location",
                                    MainController]);

function MainController($scope, houseService, $location){
    $scope.getHouses = function(){
        houseService.getHouses().then(function(data){
        $scope.allApartment = data.data[0].response.listings;
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