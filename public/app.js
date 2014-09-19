angular.module('plainMean',[
    'ngRoute',
    'plainMean.controllers',
    'customerServices'
    ])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', { templateUrl: 'admin/home.tpl.html', controller: 'HomeCtrl' }).
            when('/customer', { templateUrl: 'admin/list.tpl.html', controller: 'ListCtrl' }).
            when('/customer/:id', { templateUrl: 'admin/item.tpl.html', controller: 'ItemCtrl' }).
            when('/new', { templateUrl: 'admin/new.tpl.html', controller: 'NewCtrl' }).
            when('/contact', { templateUrl: 'crm/contact/list.tpl.html', controller: 'ContactListCtrl' }).
            when('/contact/new', { templateUrl: 'crm/contact/new.tpl.html', controller: 'ContactNewCtrl' }).
            when('/contact/populate', { templateUrl: 'crm/contact/populate.tpl.html', controller: 'ContactPopulateCtrl' }).
            otherwise({ redirectTo: '/' });
    }]);