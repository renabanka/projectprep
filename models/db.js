require('dotenv').config(); //# dot-env
var db = require('knex')({	//# knex
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'l33tdba',
        password: 'yellowpencil',
        database: 'cats_fansite'
    }
});

module.exports = db;