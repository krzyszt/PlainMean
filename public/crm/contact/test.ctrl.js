angular.module("plainMean")
    .controller('TestListCtrl', ['$scope','$route','Contact',function($scope, $route, Contact){
       $scope.contacts = Contact.query();
   }]);