angular.module('knowledgeBase',[
	'ngRoute',
	'CategoriesModule',
	'ArticlesModule'
])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(false);
	$routeProvider
	.when('/categories',{
		templateUrl : '/views/categories.view.html'
	})
	.when('/',{
		templateUrl : '/views/categories.view.html'
	})
	.when('/articles/category/:categoryName',{
		templateUrl : '/views/articlesByCategory.html',
		controller : 'CategoriesDetailController'
	})
	.otherwise({redirectTo:'/'})
 
}])

