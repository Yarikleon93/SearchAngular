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
        // var min = 0;
        // var max = 9999999999999999;
        // if (typeof $scope.minPrice != 'undefined') {
        //     min = $scope.minPrice;
        //     return obj.price >= min;
        // }
        // else if (typeof $scope.maxPrice != 'undefined' && $scope.minPrice != '') {
        //     max = $scope.maxPrice;
        //     return obj.price <= max;
        // }
        // else {
        //     return obj.price;
        // }
        $scope.filterAllApartment = function (obj) {
    
        var min = 0;
        var max = Number.MAX_VALUE;
        if (typeof $scope.minPrice != 'undefined') {
            min = $scope.minPrice;
        }
        if (typeof $scope.maxPrice != 'undefined') {
            max = $scope.maxPrice;
        }
        
        if (obj.price >= min && obj.price <= max) {
            return obj
        }
    }
    }
    

    $scope.createDynamicArray = function(num) {
        return new Array(num);
    };

    (function(){
        $scope.getHouses();
    })()
}
