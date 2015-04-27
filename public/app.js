angular.module('plainMean',[
    'ngRoute',
    'customServices',
    'plainMean.contact',
    'plainMean.customer',
    'plainMean.user',
    'plainMean.product'
    ])
   .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', { templateUrl: 'common/home.tpl.html'}).
            when('/api/customer', { templateUrl: 'crm/customer/list.tpl.html', controller: 'CustomerListCtrl' }).
            when('/api/customer/:id', { templateUrl: 'crm/customer/item.tpl.html', controller: 'CustomerItemCtrl' }).
            when('/api/contact', { templateUrl: 'crm/contact/list.tpl.html', controller: 'ContactListCtrl' }).
            when('/api/contact/:id', { templateUrl: 'crm/contact/item.tpl.html', controller: 'ContactItemCtrl' }).
            when('/api/populate', { templateUrl: 'crm/contact/populate.tpl.html', controller: 'ContactPopulateCtrl' }).
            when('/api/user', { templateUrl: 'admin/user/list.tpl.html', controller: 'UserListCtrl'}).
            when('/api/user/:id', { templateUrl: 'admin/user/item.tpl.html', controller: 'UserItemCtrl' }).
            when('/api/product', { templateUrl: 'product/list.tpl.html', controller: 'ProductListCtrl' }).
            when('/api/product/:id', { templateUrl: 'product/item.tpl.html', controller: 'ProductItemCtrl' }).
            otherwise({ redirectTo: '/' });
    }]);