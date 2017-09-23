angular.module('CategoriesModule',[])

//Home page categoreis controller
.controller('CategoriesController',function($scope,$http,categoryService){

     categoryService.getCategories($scope.categoryName)
     .then(function(categories){
         $scope.categories = categories;
     });
})

/* Categorywise articles*/
.controller('CategoriesDetailController',function($scope,$http,$routeParams,categoryService){
	$scope.articles        = []
  $scope.categoryDetails = {}

  $scope.categoryName = $routeParams.categoryName;

  //get articles by category
  categoryService.getArticlesByCategory($scope.categoryName)
     .then(function(articles){
        $scope.articles = articles;
  });

  //get Category Details
  categoryService.getCategoryDetailsByName($scope.categoryName)
     .then(function(categoryDetails){
        $scope.categoryDetails = categoryDetails;
        console.log(categoryDetails);
  });

})


