var express = require('express');
var router = express.Router();
var Article = require('../models/article');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err,articles){
    if(err)
      console.log('error in retrieving')
    res.json(articles);
  })
});


router.get('/:id', function(req, res, next) {
  Article.getArticlesById(req.params.id, function(err,article){
    if(err)
      console.log('error in retrieving')
    res.json(article);
  })
});

router.get('/categories/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function(err,article){
    if(err)
      console.log('error in retrieving')
    res.json(article);
  })
});

module.exports = router;
