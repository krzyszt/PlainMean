angular.module('customServices', ['ngResource'])
.factory('ContactPopulate',[ '$resource', function($resource){
    return $resource('/api/populate',{}, {
        query: { method: 'GET', params: {contactId: ''}, isArray: true} 
    });
 }])
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
 .factory('Product',[ '$resource', function($resource){
    return $resource('/api/product/:productId',{}, {
        query: { method: 'GET', params: {productId: ''}, isArray: true} 
    });
 }]);
// .factory('Product',[ '$http', '$log',function($http, $log){
//         return {
//             getProduct: function(successcb){
//                 $http({ method: "GET", url: "/api/product"}).
//                    success(function(data, status, headers,config){
//                        successcb(data);
//                    })
//                    .error(function(data, status,headers, config){
//                        $log.warn(data,status,headers,config);
//                        
//                    });
//             }
//         };
// }]);