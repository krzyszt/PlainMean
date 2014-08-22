/**
 * Controllers
 */

angular.module('plainMean.controllers',[])
   .controller('ListCtrl',['$scope', function($scope){
     $scope.customers = [
         { name: 'Dummy Company 1', city: 'Bristol'},
         { name: 'Dummy Company 2', city: 'London'},  
         { name: 'Dummy Company 3', city: 'Croydon'},
         { name: 'Dummy Company 4', city: 'Manchester'},
         { name: 'Dummy Company 5', city: 'Bristol'},
         { name: 'Dummy Company 6', city: 'London'},
         { name: 'Dummy Company 7', city: 'Croydon'},
         { name: 'Dummy Company 8', city: 'Manchester'}
     ];
   }])
   .controller('NewCtrl',['$scope', function($scope){
       $scope.createCustomer = function(){
           
       };
   }]);