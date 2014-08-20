/**
 * Controllers
 */

angular.module('plainMean.controllers',[])
   .controller('ListCtrl',['$scope', function($scope){
     $scope.customers = [];
     $scope.customers.push({ name: 'Dummy Company 1', city: 'Bristol'});
     $scope.customers.push({ name: 'Dummy Company 2', city: 'London'});
     $scope.customers.push({ name: 'Dummy Company 3', city: 'Croydon'});
     $scope.customers.push({ name: 'Dummy Company 4', city: 'Manchester'});
     $scope.customers.push({ name: 'Dummy Company 5', city: 'Bristol'});
     $scope.customers.push({ name: 'Dummy Company 6', city: 'London'});
     $scope.customers.push({ name: 'Dummy Company 7', city: 'Croydon'});
     $scope.customers.push({ name: 'Dummy Company 8', city: 'Manchester'});
   }])
   .controller('NewCtrl',['$scope', function($scope){
       $scope.createCustomer = function(){
           
       };
   }]);