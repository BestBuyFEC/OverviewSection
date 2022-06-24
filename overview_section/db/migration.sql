DROP DATABASE overview_db;
DROP TABLE IF EXISTS product_description;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS included;



CREATE DATABASE overview_db;
\c overview_db;

CREATE TABLE product_description (
     id SERIAL ,
     name text,
     description_body text,
     sku text
 );
 
 CREATE TABLE product_features (
    id SERIAL,
    features_body text,
    sku text
 );
 