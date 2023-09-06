CREATE TABLE user (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    email VARCHAR(31) NOT NULL,
    passwd VARCHAR(30) NOT NULL
    );

CREATE TABLE categories (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    description TEXT
    );