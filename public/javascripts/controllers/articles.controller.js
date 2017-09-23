angular.module('ArticlesModule',[])
.constant('ARTICLES_URL','http://localhost:3000/articles')

//Home page articles controller
.controller('ArticlesController',['$scope','$http','ARTICLES_URL',function($scope,$http,ARTICLES_URL){
	$http.get(ARTICLES_URL)
	.then(function(response) {
          $scope.articles = response.data;
    },function(result){
    	console.log('Error'+result);
    });
}])

