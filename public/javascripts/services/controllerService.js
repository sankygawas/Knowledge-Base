angular.module('CategoriesModule')
.constant('URL',{
  'CATEGORIES_URL':'http://localhost:3000/categories',
  'ARTICLES_BY_CATEGORY_URL': 'http://localhost:3000/articles/categories',
  'CATEGORY_BY_CATEGORY_NAME_URL':'http://localhost:3000/categories/categoryName' 
})

.factory('categoryService',function($http,URL,$q){
	return {

		//get articles by category
		getArticlesByCategory : function(categoryName){
				var deferred = $q.defer();
				$http.get(URL.ARTICLES_BY_CATEGORY_URL+'/'+categoryName)
				.then(function(response) {
				     deferred.resolve(response.data);
				},function(result){
				   console.log('Error'+result);
				   deferred.reject(result);
				});
				return deferred.promise;
	  	},

	  	//get all categories
	  	getCategories : function(){
	  			var deferred = $q.defer();
	  			$http.get(URL.CATEGORIES_URL)
				.then(function(response) {
			         deferred.resolve(response.data);
			    },function(result){
			    	console.log('Error'+result);
			    	deferred.reject(result);
			    });
			    return deferred.promise;
	  	},

	  	//get category Details by category Name
	  	getCategoryDetailsByName:function(categoryName){
	  		var deferred = $q.defer();
	  			$http.get(URL.CATEGORY_BY_CATEGORY_NAME_URL+'/'+categoryName)
				.then(function(response) {
			         deferred.resolve(response.data[0]);
			    },function(result){
			    	console.log('Error'+result);
			    	deferred.reject(result);
			    });
			    return deferred.promise;
	  	}

	}

})
