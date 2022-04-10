CREATE DATABASE `test-db`;

use `test-db`;

CREATE TABLE `User`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL UNIQUE,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NULL,
  CONSTRAINT User_pk PRIMARY KEY (id)
);
