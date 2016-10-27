var express = require('express');
var useraccountsctrl = express.Router();
var AccountModel = require('../models/AccountModel');
var bcrypt = require('bcryptjs');



useraccountsctrl.get('/useraccounts', function(req, res, next) {
    res.render('useraccounts', { title: 'Express' });
});



useraccountsctrl.get('/create', create);
useraccountsctrl.get('/id/:id', findById)   ;
useraccountsctrl.get('/all', findAll);

/* create row w/bookshelf */
function create(req, res, next) {
    //req.body contain whatever our form sends
    var email = { email:'rena.banka@gmail.com'};
    var model = new AccountModel(email).save().then(function(result) {
        res.json(result);
        //res.render('template', result.attributes);
    });
};

function findById(req, res, next) {
    var id = req.params.id; // typically going to be our ID
    var model = AccountModel.where({
        id: id
    }).fetch().then(function(result) {
        res.json(result);
    });
    console.log(model);
};

function findAll(req, res, next) {
    AccountModel.collection().fetch().then(function(results) {
        res.json(results);
    });
};


module.exports = useraccountsctrl;