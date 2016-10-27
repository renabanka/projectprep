var db = require('./db');

var bookshelf = require('bookshelf')(db);

var NewsFeedModel = bookshelf.Model.extend({
    tableName: 'news_feed'
});

module.exports = NewsFeedModel;

