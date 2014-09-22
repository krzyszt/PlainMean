/**
 * Controllers
 */

angular.module('plainMean.controllers',['ngRoute'])
   .controller('CustomerListCtrl', ['$scope','$route','Customer',function($scope, $route, Customer){
       $scope.customers = Customer.query();
   }])
   .controller('CustomerItemCtrl', ['$scope','$routeParams', 'Customer', function($scope, $routeParams, Customer){
      
         $scope.pageTitle = "Create Customer";
         
         $scope.save = function(){
            if( $routeParams.id == 0 ) {
               Customer.save($scope.customer, function(ref){
                  $scope.customer._id = ref._id;
                  $scope.customer = {
                       name: '',
                       city: ''
                  };
               });
            } else {
               console.log("Update to implement");
            }
         };
      
      if( $routeParams.id != 0 ) {
         $scope.customer = Customer.get({ customerId: $routeParams.id });
         $scope.pageTitle = "Update Customer";
      }
   }]);