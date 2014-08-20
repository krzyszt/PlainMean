angular.module('plainMean',[])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/list', { templateUrl: 'partials/list.html', controller: MainCtrl}).
            when('/item/:itemId', { templateUrl: 'partials/item.html', controller: ItemCtrl}).
            when('/new', { templateUrl: 'partials/new_item.html', controller: NewItemCtrl}).
            otherwise.redirectTo('/list');
    }]);