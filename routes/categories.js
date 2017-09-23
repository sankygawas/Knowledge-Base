var express = require('express');
var router = express.Router();
var Category = require('../models/category');

/* GETall categories */
router.get('/', function(req, res, next) {
  Category.getCategories(function(err,categories){
    if(err)
      console.log('Error in retrieving all categories');

    res.json(categories)
  })
});

/* GET categories by category id */
router.get('/:id', function(req, res, next) {
  Category.getCategoryById(req.params.id, function(err,category){
    if(err)
      console.log('Error in retrieving category by name');

    res.json(category)
  })
});


/* GET categories by category name */
router.get('/categoryName/:name', function(req, res, next) {
  Category.getCategoryByName(req.params.name, function(err,category){
    if(err)
      console.log('Error in retrieving Category By name');

    console.log(category)
    res.json(category)
  })
});

module.exports = router;
