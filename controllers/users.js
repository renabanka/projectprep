var express = require('express');
var router = express.Router();
var Account = require('../models/AccountModel');
var bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// get requests show content
// post requests take content from req.params && req.body
// and then can res.json the result (or res.render, etc)
router.post('/register', attemptToRegister);
router.post('/login', attemptToLogin);

function attemptToRegister(req, res, next) {
  var password = req.body.password;
  var hashedPassword = createPasswordHash(password);
  var account = new Account({
    email: req.body.email,
    password_hash: hashedPassword
  }).save().then(function(result) {
    //res.render
    res.json(result);
  });
};

function createPasswordHash (password) {
  var salt = 10; // salt factor of 10
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};
function comparePasswordHashes (input, db) {
  //input: user's attempted to login
  var hash = createPasswordHash(input);
  return bcrypt.compareSync(input, db);
};

function attemptToLogin(req, res, next) {
  var password = req.body.password;
  // who is our user?
  Account.where('email', req.body.email).fetch().then(
      function(result) {
        // we now have our user: result
        // next, we need their password! (to compare it)
        // bcrypt.compareSync(password, hash); // returns true/false
        // console.log(result);
        // model attributes on results are sometimes stored on results.attributes
        var attempt = comparePasswordHashes(req.body.password, result.attributes.password_hash);
        // then we share the results
        res.json({'is_logged_in': attempt });
      }
  )
};

module.exports = router;

