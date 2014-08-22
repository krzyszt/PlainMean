/**
 * Controllers
 */

angular.module('plainMean.controllers',[])
   .controller('ListCtrl', ['$scope','Customer',function($scope, Customer){
       $scope.customers = Customer.query();
   }])
   .controller('ItemCtrl',[ '$scope', 'routeParams', 'Customer', function($scope, $routeParams, Customer){
       console.log($routeParams);
       $scope.customer = Customer.get({ customerId: $routeParams.customerId });
   }])
   .controller('NewCtrl',['$scope', 'Customer', function($scope, Customer){
       $scope.createCustomer = function(){
           Customer.save($scope.customer, function(ref){
               $scope.customer._id = ref._id;
               $scope.customer = {
                       name: '',
                       city: ''
               }
           });
       };
   }]);