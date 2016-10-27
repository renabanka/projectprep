var express = require('express');
var ctrl = express.Router();
var CatModel = require('../models/CatModel');


ctrl.get('/cats', function(req, res, next) {
    res.render('cats', { title: 'Express' });
});


ctrl.get('/create', create);
ctrl.get('/id/:id', findById)   ;
ctrl.get('/all', findAll);

/* create row w/bookshelf */
function create(req, res, next) {
    //req.body contain whatever our form sends
    var kirby = { name: 'Kirby' };
    var model = new CatModel(kirby).save().then(function(result) {
        res.json(result);
        //res.render('template', result.attributes);
    });
};

function findById(req, res, next) {
    var id = req.params.id; // typically going to be our ID
    var model = CatModel.where({
        id: id
    }).fetch().then(function(result) {
        res.json(result);
    });
    console.log(model);
};

function findAll(req, res, next) {
    CatModel.collection().fetch().then(function(results) {
        res.json(results);
    });
};

module.exports = ctrl;