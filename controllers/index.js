var express = require('express');
var router = express.Router();
var ctrl = express.Router();
var CatModel = require('../models/CatModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
