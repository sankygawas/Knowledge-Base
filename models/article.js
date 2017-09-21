var mongoose = require('mongoose');
//Schema
var articleSchema = mongoose.Schema({
  title:{
    type:String,
    required:true,
    index:true
  },
  body:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true,
    index:true
  },
  date:{
    type:Date,
    default:Date.now
  }
});

//getting model
var Article = module.exports = mongoose.model('articles',articleSchema)

//get all articles
module.exports.getArticles = function(callback){
  Article.find(callback)
}

//get articles By Id
module.exports.getArticlesById = function(id,callback){
  Article.findById(id,callback)
}

//get articles byt category
module.exports.getArticlesByCategory = function(category,callback){
  var query = {category:category}
  Article.find(query,callback)
}

//create an articles
module.exports.creatArticle = function(newArticle,callback){
  Article.save(newArticle);
}

//remove an articles
module.exports.creatArticle = function(id,callback){
  Article.findById(id).remove(callback);
}
