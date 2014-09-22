angular.module('plainMean',[
    'ngRoute',
    'plainMean.controllers',
    'customerServices'
    ])
   .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', { templateUrl: 'admin/home.tpl.html', controller: 'HomeCtrl' }).
            when('/api/customer', { templateUrl: 'crm/customer/list.tpl.html', controller: 'CustomerListCtrl' }).
            when('/api/customer/:id', { templateUrl: 'crm/customer/item.tpl.html', controller: 'CustomerItemCtrl' }).
            when('/api/contact', { templateUrl: 'crm/contact/list.tpl.html', controller: 'ContactListCtrl' }).
            when('/api/contact/:id', { templateUrl: 'crm/contact/item.tpl.html', controller: 'ContactItemCtrl' }).
            when('/api/contact/populate', { templateUrl: 'crm/contact/populate.tpl.html', controller: 'ContactPopulateCtrl' }).
            otherwise({ redirectTo: '/' });
    }]);