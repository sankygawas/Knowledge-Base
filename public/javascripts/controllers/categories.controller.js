angular.module('CategoriesModeule',[])
.constant('categoriesURL','http://localhost:3000/categories')

//Home page categoreis controller
.controller('CategoriesController',['$scope','$http','categoriesURL',function($scope,$http,categoriesURL){
	$http.get(categoriesURL)
	.then(function(response) {
          console.log(response);
          $scope.categories = response.data;
    },function(result){
    	console.log('Error'+result);
    });
}])

//articles category detail controller
.controller('CategoriesDetailController',['$scope','$http',function($scope,$http){
	
}])