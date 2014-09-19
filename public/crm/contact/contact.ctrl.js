angular.module("plainMean")
    .controller('ContactListCtrl', ['$scope','$route','Contact',function($scope, $route, Contact){
       $scope.contacts = Contact.query();
   }])
    .controller('ContactPopulateCtrl', ['$scope','$route','ContactPopulate',function($scope, $route, ContactPopulate){
       $scope.contacts = ContactPopulate.query();
   }])
   .controller('ContactItemCtrl', ['$scope','$routeParams', 'Contact', function($scope, $routeParams, Contact){
       $scope.contact = Contact.get({ contactId: $routeParams.id });
   }])
   .controller('ContactNewCtrl',['$scope', 'Contact', function($scope, Contact){
       $scope.createContact = function(){
           Contact.save($scope.contact, function(ref){
               $scope.contact._id = ref._id;
               $scope.contact = {
                       firstName: '',
                       lastName: '',
                       email: ''
               };
           });
       };
   }]);