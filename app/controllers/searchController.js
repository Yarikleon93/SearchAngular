App.controller('searchController', ["$scope", 
                                    "houseService",
                                    "$routeParams",
                                    SearchController]);

function SearchController($scope, houseService, $routeParams){
    $scope.getHouses = function(){
        houseService.getHouses().then(function(data){
        $scope.allApartment = data.data[0].response.listings;
        },function(error){
        })
    };
    $scope.filterAllApartment = function (obj) {
    //    return $scope.$watch('minPrice', function (newVal, oldVal) {
    //        var min = 0;
    //        if (!newVal) return;
    //     });
        var min = 0;
        var max = 9999999999999999;
        if (typeof $scope.minPrice != 'undefined') {
            min = $scope.minPrice;
            return obj.price >= min;
        }
        else if (typeof $scope.maxPrice != 'undefined' && $scope.minPrice != '') {
            max = $scope.maxPrice;
            return obj.price <= max;
        }
        // else if (typeof $scope.maxRooms != 'undefined') {
        //     maxR = $scope.maxRooms;
        // }
        else {
            return obj.price;
        }
    }
    // for (var i = 1; i<$scope.allApartment.bedroom_number; i++) {
    // var bedroom_for = '<img src="img/agt_home.png">';
    //     bedroom_for = $scope.bedroom+bedroom_for;
    //     $scope.bedroom = bedroom_for;
    // }
    

    $scope.createDynamicArray = function(num) {
        return new Array(num);
    };

    (function(){
        $scope.getHouses();
    })()
}
