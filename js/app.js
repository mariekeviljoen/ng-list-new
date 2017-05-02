var myApp = angular.module('myApp', [
  'ngRoute',    
  'artistControllers',
  'mymodal',
  'copyright'    
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/region', {
    templateUrl: 'partials/region.html',
    controller: 'RegionController'
  }).
  when('/category', {
    templateUrl: 'partials/category.html',
    controller: 'CategoryController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/add', {
    templateUrl: 'partials/add.html',
    controller: 'MainCtrl'
  }).
  when('/add2', {
    templateUrl: 'partials/add2.html',
    controller: 'FormController'
  }).
  when('/detail2/:shortname', {
    templateUrl: 'partials/detail2.html',
    controller: 'Detail2Controller'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);

