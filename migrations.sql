create database cats_fansite;

create table user_accounts(
    id int not null auto_increment,
    email varchar(255) not null,
    password_has varchar(61) not null,
    primary key (id)
    );

    create table cats (
        id int not null auto_increment,
        name varchar(255) not null,
        photo_un varchar(255),
        comment varchar(255),
        primary key (id)
        );


    create table news_feed (
                  id int not null auto_increment,
                  timestamp DATETIME not null,
                  comment varchar(255),
                  primary key (id)
                  );