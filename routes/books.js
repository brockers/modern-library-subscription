var express = require('express');
var router = express.Router();
var Books = require('../models/books')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library_test');

var db = mongoose.connection;
db.on('error', function(msg) {
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function() {
	console.log('Mongoose connection established');
});


router.get('/', function(req, res, next) {
	re.json({status: "success"});
});

/* GET home page. */
router.get('/list', function(req, res, next) {
	Books.find({}).exec(function(err, books) {
		res.json({books: books});
	});
});

router.post('/add/:name/:auth', function(req, res, next) {
	Books.insert({
		title: name,
		author: auth
	}).exec(function(err, books) {
		res.json({status: success});
	});
});

module.exports = router;
