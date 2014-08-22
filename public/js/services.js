angular.module('customerServices', ['ngResource'])
 .factory('Customer',[ '$resource', function($resource){
    return $resource('/customer/:customerId',{}, {
        query: { method: 'GET', params: {customerId: ''}, isArray: true} 
    });
 }]);