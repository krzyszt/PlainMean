angular.module('plainMean.product', [])
   .controller('ProductListCtrl', ['$scope', '$route', 'Product', function ($scope, $route, Product) {
           
              $scope.pageTitle = "Create Customer";
            
//           Product.getProduct(function (product) {
//               $scope.products = product;
//               console.log($scope.products);
//           });

           $scope.products = Product.query();
           $scope.selectProduct = function (product) {
               $scope.selectedProduct = product;
           };

           $scope.isSelected = function (product) {
               return $scope.selectedProduct === product;
           };

       }])
      .controller('ProductItemCtrl', ['$scope', '$routeParams', 'Product', function($scope, $routeParams, Product) {

         $scope.pageTitle = "Create Product";

         if ($routeParams.id != 0) {
            $scope.product = Product.get({ productId: $routeParams.id});
            $scope.pageTitle = "Update Product";
         } else {
            $scope.product = {
               name: '',
               code: '',
               type: '',
               description: ''
            };
         };
         

         $scope.save = function() {
            if ($routeParams.id == 0) {
               Product.save($scope.product, function(ref) {
                  $scope.product._id = ref._id;
                  $scope.product = {
                     name: '',
                     code: '',
                    type: '',
                    description: ''
                  };
               });
            } else {
               console.log("Update to implement");
            }
         };


      }]);