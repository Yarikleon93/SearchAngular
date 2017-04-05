App.controller('apartmentController', ["$scope", 
                                    "houseService",
                                    "$route",
                                    "$location",
                                    "$routeParams", 
                                    ApartmentController]);

function ApartmentController($scope, houseService, $route, $location, $routeParams){
    $scope.apartment = {};
    $scope.getHouses = function(){
        houseService.getHouses().then(function(data){
        $scope.allApartment = data.data[0].response.listings;
        getApartmentByLongitude($routeParams.longitude).then(function(apartment) {
            $scope.apartment = apartment;
        });
        },function(error){
        })
    };
    function getApartmentByLongitude(longitude) {
        return new Promise(function(resolve, reject) {
            $scope.allApartment.forEach(function(apartment) {
                if (apartment.longitude == longitude) {
                    resolve(apartment);
                    return;
                }
            })
        });
    }


    (function(){
        $scope.getHouses();
    })()
}