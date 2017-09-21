var mongoose = require('mongoose');
//Schema
var categorySchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    index:true
  },
  description:{
    type:String
  }

});

//getting model
var Category = module.exports = mongoose.model('categories',categorySchema)

//get all articles
module.exports.getCategories = function(callback){
  Category.find(callback)
}

//get artiocles By Id
module.exports.getCategoryById = function(id,callback){
  Category.findById(id,callback)
}

//get cartegories By name
module.exports.getCategoryByName = function(name,callback){
  var query = {name:name}
  Category.find(query,callback)
}
