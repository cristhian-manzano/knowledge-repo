CREATE DATABASE `test-db`;

use `test-db`;

CREATE TABLE `User`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  CONSTRAINT User_pk PRIMARY KEY (id)
);
