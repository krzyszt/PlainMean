angular.module("plainMean.user",[])
   .controller( 'UserListCtrl', ['$scope', '$route', 'User' , function( $scope, $route, User){
       $scope.users = User.query();
   }])
   .controller('UserItemCtrl', ['$scope','$routeParams', 'User', function($scope, $routeParams, User){
     
       $scope.pageTitle = "Create User";
     
       $scope.save = function(){
           if( $routeParams.id == 0 ) {
               User.save($scope.user, function(ref){
                  $scope.user._id = ref._id;
                  $scope.user = {
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
          
          $scope.user = User.get({ userId: $routeParams.id });
          $scope.pageTitle = "Update User";
       }
         
       
   }]);