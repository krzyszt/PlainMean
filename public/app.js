angular.module('plainMean',[
    'ngRoute',
    'plainMean.controllers',
    'customerServices'
    ])
   .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', { templateUrl: 'admin/home.tpl.html', controller: 'HomeCtrl' }).
//            when('/api/:model/:id', { templateUrl: 'admin/home_item.tpl.html', controller: 'HomeCtrl' }).
//            when('/customer', { templateUrl: 'admin/list.tpl.html', controller: 'ListCtrl' }).
//            when('/customer/:id', { templateUrl: 'admin/item.tpl.html', controller: 'ItemCtrl' }).
//            when('/new', { templateUrl: 'admin/new.tpl.html', controller: 'NewCtrl' }).
            when('/api/contact', { templateUrl: 'crm/contact/list.tpl.html', controller: 'ContactListCtrl' }).
            when('/api/contact/:id', { templateUrl: 'crm/contact/item.tpl.html', controller: 'ContactItemCtrl' }).
            when('/api/contact/populate', { templateUrl: 'crm/contact/populate.tpl.html', controller: 'ContactPopulateCtrl' }).
            otherwise({ redirectTo: '/' });
    }]);