/**
 * Controllers
 */

angular.module('plainMean.controllers',['ngRoute'])
   .controller('HomeCtrl',["$scope", function($scope){
       
   }])
   .controller('ListCtrl', ['$scope','$route','Customer',function($scope, $route, Customer){
       $scope.customers = Customer.query();
   }])
   .controller('ItemCtrl', ['$scope','$routeParams', 'Customer', function($scope, $routeParams, Customer){
       $scope.customer = Customer.get({ customerId: $routeParams.id });
       console.log($scope.customer);
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