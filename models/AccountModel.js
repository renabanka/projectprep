var db = require('./db');



var bookshelf = require('bookshelf')(db);

var AccountModel = bookshelf.Model.extend({
    tableName: 'user_accounts'
});

module.exports = AccountModel;

