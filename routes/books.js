var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

var db = mongoose.connection;
db.on('error', function(msg) {
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function() {
	console.log('Mongoose connection established');
});

var Books = require('../models/books')

/* GET home page. */
router.get('/', function(req, res, next) {
	Books.find({}).exec(function(err, books) {
		res.json({books: books});
	});
});

module.exports = router;
