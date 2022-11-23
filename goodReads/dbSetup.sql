-- Active: 1668895251805@@bobocat.mysql.database.azure.com@3306@books

CREATE TABLE
    IF NOT EXISTS accounts(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        name varchar(255) COMMENT 'User Name',
        email varchar(255) COMMENT 'User Email',
        picture varchar(255) COMMENT 'User Picture'
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS follows(
        id INT NOT NULL primary key AUTO_INCREMENT COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        creatorId VARCHAR(255) NOT NULL,
        followingUserId VARCHAR(255) NOT NULL,
        FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE,
        FOREIGN KEY (followingUserId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS bookshelves(
        id INT NOT NULL primary key AUTO_INCREMENT COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        title varchar(255),
        img VARCHAR(500),
        type ENUM(
            "favorite",
            'wishList',
            'reading',
            'finished'
        ),
        creatorId varchar(255) NOT NULL,
        FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS books(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        title varchar(255),
        authors VARCHAR(1000),
        img varchar(1000),
        description varchar(10000),
        publishedDate varchar(255),
        publisher varchar(255),
        previewLink VARCHAR(255),
        pageCount INT,
        categories VARCHAR(1000),
        maturityRating varchar(255),
        language varchar(255),
        printType varchar(255)
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS authors(
        id INT NOT NULL primary key AUTO_INCREMENT,
        name varchar(255) COMMENT 'User Name',
        bookId varchar(255) NOT NULL,
        FOREIGN KEY (bookId) REFERENCES books(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS categories(
        id INT NOT NULL primary key AUTO_INCREMENT,
        name varchar(255) COMMENT 'User Name',
        bookId VARCHAR(255) NOT NULL,
        FOREIGN KEY (bookId) REFERENCES books(id) ON DELETE CASCADE 
    ) default charset utf8 COMMENT '';

CREATE TABLE
    IF NOT EXISTS reviews(
        id INT NOT NULL primary key AUTO_INCREMENT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        body TEXT NOT NULL,
        recommend TINYINT DEFAULT 0,
        bookId VARCHAR(255) NOT NULL,
        creatorId VARCHAR(255) NOT NULL,
        FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

-- DROP Table books;

-- DROP Table bookshelves;

-- INSERT INTO bookshelves()values()