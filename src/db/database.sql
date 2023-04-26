CREATE DATABASE IF NOT EXISTS aycrondb;
USE aycrondb;

CREATE TABLE warehouse (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(45) NOT NULL,
    address VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(45) NOT NULL,
    zip VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

DESCRIBE warehouse;
ALTER TABLE warehouse RENAME warehouses;

INSERT INTO warehouses (name, code, address, state, country, zip) VALUES ('Warehouse 1', 'W1', 'Address 1', 'State 1', 'Country 1', 'Zip 1');