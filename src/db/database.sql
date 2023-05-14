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

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE warehouses ADD COLUMN lat float DEFAULT NULL;
ALTER TABLE warehouses ADD COLUMN lng float DEFAULT NULL;

SELECT id, ( 3959 * acos( cos( radians(-26.8675) ) * cos( radians( lat ) ) * 
cos( radians( lng ) - radians(-65.2141) ) + sin( radians(-26.8675) ) * 
sin( radians( lat ) ) ) ) AS distance FROM warehouses HAVING
distance < 25 ORDER BY distance LIMIT 0 , 3;

ALTER TABLE warehouses ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE warehouses ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE warehouses ADD COLUMN filename VARCHAR(255) DEFAULT NULL;