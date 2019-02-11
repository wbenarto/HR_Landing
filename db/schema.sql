CREATE DATABASE emails_db;
USE emails_db;

CREATE TABLE emails (
    id INT AUTO_INCREMENT NOT NULL,
    emails VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
