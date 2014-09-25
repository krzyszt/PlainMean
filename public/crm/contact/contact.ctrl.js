angular.module("plainMean.contact", [])
    .controller('ContactListCtrl', ['$scope','$route','Contact',function($scope, $route, Contact){
       $scope.contacts = Contact.query();
   }])
    .controller('ContactPopulateCtrl', ['$scope','$route','ContactPopulate',function($scope, $route, ContactPopulate){
       $scope.contacts = ContactPopulate.query();
   }])
   .controller('ContactItemCtrl', ['$scope','$routeParams', 'Contact', function($scope, $routeParams, Contact){
     
       $scope.pageTitle = "Create Contact";
     
       $scope.save = function(){
           if( $routeParams.id == 0 ) {
               Contact.save($scope.contact, function(ref){
                  $scope.contact._id = ref._id;
                  $scope.contact = {
                      firstName: '',
                      lastName: '',
                      email: ''
                  };
               });
           } else {
              console.log("Update to implement");
           }
           
       };
       
       if( $routeParams.id != 0 ) {
          $scope.contact = Contact.get({ contactId: $routeParams.id });
          $scope.pageTitle = "Update Contact";
       }
         
       
   }]);