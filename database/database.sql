CREATE DATABASE ng_dogs_db;
USE ng_dogs_db;
CREATE TABLE dogs(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    age VARCHAR(25),
    description VARCHAR(255),
    location VARCHAR(200),
    image VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE dogs;  