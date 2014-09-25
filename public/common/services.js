angular.module('customServices', ['ngResource'])
 .factory('Customer',[ '$resource', function($resource){
    return $resource('/api/customer/:customerId',{}, {
        query: { method: 'GET', params: {customerId: ''}, isArray: true} 
    });
 }])
.factory('Contact',[ '$resource', function($resource){
    return $resource('/api/contact/:contactId',{}, {
        query: { method: 'GET', params: {contactId: ''}, isArray: true} 
    });
 }])
 .factory('User',[ '$resource', function($resource){
    return $resource('/api/user/:userId',{}, {
        query: { method: 'GET', params: {userId: ''}, isArray: true} 
    });
 }])
.factory('ContactPopulate',[ '$resource', function($resource){
    return $resource('/api/populate',{}, {
        query: { method: 'GET', params: {contactId: ''}, isArray: true} 
    });
 }]);