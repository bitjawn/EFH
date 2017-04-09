var express = require('express');
var router = express.Router();

// home view
router.get('/', function(req, res){
	res.render('index',{title:'Home'});
});

// about view
router.get('/about', function(req, res){
	res.render('about', {title:'About'});
});

// contact view
router.get('/contact', function(req, res){
	res.render('contact', {title:'Contact'});
});

module.exports = router;