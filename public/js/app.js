angular.module('plainMean',[
    'ngRoute',
    'plainMean.controllers',
    'customerServices'
    ])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/customer', { templateUrl: 'partials/list.html', controller: 'ListCtrl' }).
            when('/customer/:id', { templateUrl: 'partials/item.html', controller: 'ItemCtrl' }).
            when('/new', { templateUrl: 'partials/new.html', controller: 'NewCtrl' }).
            otherwise({ redirectTo: '/customer' });
    }]);