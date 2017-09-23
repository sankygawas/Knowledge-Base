angular.module('knowledgeBase',[
	'ngRoute',
	'CategoriesModeule'
])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(false);
	$routeProvider
	.when('/categories',{
		templateUrl : '/views/categories.view.html',
		controller : 'CategoriesController'
	})
	.when('/',{
		templateUrl : '/views/categories.view.html',
		controller : 'CategoriesController'
	})
	.when('/articles/category/:name',{
		templateUrl : '/views/categories.detail.html',
		controller : 'CategoriesDetailController'
	})
	.otherwise({redirectTo:'/'})
 
}])

