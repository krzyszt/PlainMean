angular.module('plainMean.product', [])
   .controller('ProductListCtrl', ['$scope', '$route', 'Product', function($scope, $route, Product) {
         $scope.products = Product.query();
      
         $scope.selectProduct = function(product){
           $scope.selectedProduct = product;
         };
         
         $scope.isSelected = function(product) {
            return $scope.selectedProduct === product;
         };
      
      }]);