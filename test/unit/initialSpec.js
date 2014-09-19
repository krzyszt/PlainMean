describe("Checking Karma Setup", function(){
   
   beforeEach(module("plainMean.controllers"));
   
   it("HomeCtrl should be defined", inject(function($controller){
         
         var HomeCtrl = $controller("HomeCtrl", { $scope: {} } );
         expect(HomeCtrl).toBeDefined();
      
   }));
   
});