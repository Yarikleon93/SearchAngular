App.service('houseService',  ["$http", function($http){
    var self = this;
    self.getHouses = getHouses;
    function getHouses (){
        return $http.get('http://sandbox.web-manufacture.net/psih57/obj.json')
    }
}]);