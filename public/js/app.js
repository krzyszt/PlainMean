angular.module('plainMean',[
    'plainMean.controllers'
    ])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/list', { templateUrl: 'partials/list.html', controller: 'ListCtrl' }).
            when('/item/:customerId', { templateUrl: 'partials/item.html', controller: 'ItemCtrl' }).
            when('/new', { templateUrl: 'partials/new.html', controller: 'NewCtrl' }).
            otherwise({ redirectTo: '/list' });
    }]);