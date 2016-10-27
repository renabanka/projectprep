'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var db = require('./models/db');

gulp.task('db_create_user_table', function() {
    var sqlString = "create table user_accounts (" +
        "id int not null auto_increment, " +
        "email varchar(255) not null, " +
        "password_hash varchar(61), " +
        "primary key (id) " +
        ");";
    function cb(res) {
        console.log(res);
    }
    db.raw(sqlString).then(cb);
});

gulp.task('db_create_cats_table', function() {
    var sqlString = "create table cats (" +
        "id int not null auto_increment," +
        "name varchar(255) not null," +
        "photo_url varchar(255)," +
        "comment varchar(255)," +
        "primary key (id)" +
        ");";

    function cb(res) {
        console.log(res);
    }

    db.raw(sqlString).then(cb);

});


gulp.task('db_create_news_feed_table', function() {
    var sqlString = "create table news_feed (" +
        "id int not null auto_increment," +
        "timestamp DATETIME not null," +
        "comment text," +
        "primary key (id)" +
    ");";

    function cb(res) {
        console.log(res);
    }

    db.raw(sqlString).then(cb);

});


// section to drop SQL tables!
gulp.task('db_drop_user_table', function() {
    var sqlString = "drop table user_accounts;";
    //callback(response)
    function cb(res) {
        console.log(res);
    }
    db.raw(sqlString).then(cb);
    //db.raw(query).then(callback)
});

    gulp.task('db_drop_cats_table', function() {
        var sqlString = "drop table cats;";
        //callback(response)
        function cb(res) {
            console.log(res);
        }
        db.raw(sqlString).then(cb);
        //db.raw(query).then(callback)
    });

gulp.task('db_drop_news_feed_table', function() {
    var sqlString = "drop table news_feed;";
    //callback(response)
    function cb(res) {
        console.log(res);
    }
    db.raw(sqlString).then(cb);
    //db.raw(query).then(callback)
});




// nodemon it up!
gulp.task('Nodemon', restartServer);

function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js hbs scss sql'
    });
};

gulp.task('default', ['Nodemon']);