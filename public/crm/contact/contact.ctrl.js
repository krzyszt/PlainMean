angular.module("plainMean")
    .controller('ContactListCtrl', ['$scope','$route','Contact',function($scope, $route, Contact){
       $scope.contacts = Contact.query();
   }])
    .controller('ContactPopulateCtrl', ['$scope','$route','ContactPopulate',function($scope, $route, ContactPopulate){
       $scope.contacts = ContactPopulate.query();
   }]);