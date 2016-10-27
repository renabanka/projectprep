var express = require('express');
var newsctrl = express.Router();
var NewsFeedModel = require('../models/NewsFeed');



newsctrl.get('/newsfeed', function(req, res, next) {
    res.render('newsfeed', { title: 'Express' });
});



newsctrl.get('/create', create);
newsctrl.get('/id/:id', findById)   ;
newsctrl.get('/all', findAll);

/* create row w/bookshelf */
function create(req, res, next) {
    //req.body contain whatever our form sends
    var time = { timestamp:'2016-10-26 21:15:44'};
    var model = new NewsFeedModel(time).save().then(function(result) {
        res.json(result);
        //res.render('template', result.attributes);
    });
};

function findById(req, res, next) {
    var id = req.params.id; // typically going to be our ID
    var model = NewsFeedModel.where({
        id: id
    }).fetch().then(function(result) {
        res.json(result);
    });
    console.log(model);
};

function findAll(req, res, next) {
    NewsFeedModel.collection().fetch().then(function(results) {
        res.json(results);
    });
};

module.exports = newsctrl;