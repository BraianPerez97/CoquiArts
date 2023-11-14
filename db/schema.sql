CREATE TABLE categories (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    description VARCHAR(255)
    );

CREATE TABLE user ( 
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    email VARCHAR(31) NOT NULL,
    passwd VARCHAR(60) NOT NULL,
    json_path VARCHAR(255) DEFAULT '' NOT NULL,
    cat_id INTEGER,
    FOREIGN KEY (cat_id) REFERENCES categories.name(id)
    );
