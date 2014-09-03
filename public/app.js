angular.module('plainMean',[
    'ngRoute',
    'plainMean.controllers',
    'customerServices'
    ])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/customer', { templateUrl: 'admin/list.tpl.html', controller: 'ListCtrl' }).
            when('/customer/:id', { templateUrl: 'admin/item.tpl.html', controller: 'ItemCtrl' }).
            when('/new', { templateUrl: 'admin/new.tpl.html', controller: 'NewCtrl' }).
            otherwise({ redirectTo: '/customer' });
    }]);