var express = require('express');
var router = express.Router();
var Article = require('../models/article');

//router to get all articles
router.get('/', function(req, res, next) {
  Article.getArticles(function(err,articles){
    if(err)   console.log('error in retrieving')
    res.json(articles);
  })
});

//router to get articles by Id
router.get('/:id', function(req, res, next) {
  Article.getArticlesById(req.params.id, function(err,article){
    if(err)   console.log('error in retrieving')
    res.json(article);
  })
});

//router to get articles by category
router.get('/categories/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function(err,article){
    if(err)  console.log('error in retrieving')
    res.json(article);
  })
});

//router to create article
router.post('/',function(req,res,next){
  var title    = req.body.title;
  var category = req.body.category;
  var body     = req.body.body

  //create New Article object
  var newArticle = new Article({ title : title, category :category, body : body })

//service call to create articel
  Article.creatArticle(newArticle,function(err,article){
    if(err) console.log('error in creating ')
    res.location('/articles');
    res.redirect('/articles');
  });
});

//router to update article
router.put('/',function(req,res,next){
  var title    = req.body.title;
  var category = req.body.category;
  var body     = req.body.body
  var id       = req.body.id;

  //create Article object
  var article = { title : title, category :category, body : body }

  //service call to create articel
  Article.updateArticle(id,article,function(err,article){
    if(err) console.log('error in updating')
    res.location('/articles');
    res.redirect('/articles');
  });
});


//router to delete article
router.delete('/:id',function(req,res,next){
  Article.removeArticle(id,function(err,article){
    if(err) console.log('error in removing')
    res.location('/articles');
    res.redirect('/articles');
  });
});


module.exports = router;
