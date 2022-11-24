-- Active: 1669006953911@@bobocat.mysql.database.azure.com@3306@books

CREATE TABLE
    IF NOT EXISTS files(
        file_name VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        file_mime VARCHAR(255) NOT NULL,
        file_data longblob NOT NULL
    ) default charset utf8 COMMENT '';