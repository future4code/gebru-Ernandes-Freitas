CREATE TABLE user_cookenu {
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)NOT NULL

};

CREATE TABLE recipe_cookenu{
    id VARCHAR (255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    description TEXT NOT NULL ,
     created_at DATE,
     author_id VARCHAR(255),
     FOREIGN KEY (author_id) REFERENCES user_cookenu(id)
}