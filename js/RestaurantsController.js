bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [
  {name: "¿Porque No?", type: "Mexican", location: "Portland", price: "$$" }
  ];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName.charAt(0).toUpperCase() + $scope.restaurantName.slice(1),
                              type: $scope.restaurantType.charAt(0).toUpperCase() + $scope.restaurantType.slice(1),
                              location: $scope.restaurantLocation.charAt(0).toUpperCase() + $scope.restaurantLocation.slice(1),
                              price: $scope.restaurantPrice.charAt(0).toUpperCase() + $scope.restaurantPrice.slice(1) });
    $scope.restaurantName = null;
    $scope.restaurantType = null;
    $scope.restaurantLocation = null;
    $scope.restaurantPrice = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
