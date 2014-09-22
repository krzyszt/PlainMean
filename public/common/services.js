angular.module('customerServices', ['ngResource'])
 .factory('Customer',[ '$resource', function($resource){
    return $resource('/customer/:customerId',{}, {
        query: { method: 'GET', params: {customerId: ''}, isArray: true} 
    });
 }])
.factory('Contact',[ '$resource', function($resource){
    return $resource('/api/contact/:contactId',{}, {
        query: { method: 'GET', params: {contactId: ''}, isArray: true} 
    });
 }])
.factory('ContactPopulate',[ '$resource', function($resource){
    return $resource('/api/contact/populate',{}, {
        query: { method: 'GET', params: {contactId: ''}, isArray: true} 
    });
 }]);