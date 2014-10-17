angular.module('plainMean.customer', [])
   .controller('CustomerListCtrl', ['$scope', '$route', 'Customer', function($scope, $route, Customer) {
         $scope.customers = Customer.query();
      
         $scope.selectCustomer = function(customer){
           $scope.selectedCustomer = customer;
         };
         
         $scope.isSelected = function(customer) {
            return $scope.selectedCustomer === customer;
         };
      
      }])
   .controller('CustomerItemCtrl', ['$scope', '$routeParams', 'Customer', 'Contact', function($scope, $routeParams, Customer, Contact) {

         $scope.pageTitle = "Create Customer";
         $scope.contacts = Contact.query();

         if ($routeParams.id != 0) {
            $scope.customer = Customer.get({customerId: $routeParams.id});
            $scope.pageTitle = "Update Customer";
         } else {
            $scope.customer = {
               name: '',
               city: '',
               type: '',
               status: '',
               description: ''
            };
         };
         

         $scope.save = function() {
            if ($routeParams.id == 0) {
               Customer.save($scope.customer, function(ref) {
                  $scope.customer._id = ref._id;
                  $scope.customer = {
                     name: '',
                     city: '',
                     type: '',
                     status: '',
                     description: ''
                  };
               });
            } else {
               console.log("Update to implement");
            }
         };


      }]);