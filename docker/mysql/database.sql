DROP DATABASE IF EXISTS co2;

CREATE DATABASE IF NOT EXISTS co2;

USE co2;

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, LOCK TABLES, CREATE TEMPORARY TABLES
ON co2.* TO 'root'@'localhost' IDENTIFIED BY 'password';

CREATE TABLE IF NOT EXISTS avatars (
    id tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(16) NOT NULL,
    description VARCHAR(512) NOT NULL,
    percent tinyint UNSIGNED NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS users (
    id mediumint UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    created_at DATETIME DEFAULT '2019-01-01 00:00:00',
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS points (
    id mediumint UNSIGNED NOT NULL AUTO_INCREMENT,
    food smallint UNSIGNED NOT NULL,
    residential smallint UNSIGNED NOT NULL,
    transport smallint UNSIGNED NOT NULL,
    created_at DATETIME DEFAULT '2019-01-01 00:00:00',
    id_user mediumint UNSIGNED NOT NULL,
    id_avatar tinyint UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_avatar) REFERENCES avatars(id) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO avatars(name, description, percent) VALUES ('Crusher', "Whoops! We are sorry to say that crushers are not definitely good for planet Earth. A crusher has a low level of consciousness, most probably because they haven't been taught that human species will die off soon. Let's say they are reckless. Crushers live as if there was no tomorrow, which is a bad thing especially if you have kids and care about the well-being of your offspring. They need the urgent help of healers.", 20);
INSERT INTO users(email, password) VALUES ('bob-smith@foo.com', '$2y$12$AOR2qZ1UOOoSDahahCkRlut8q6j66IKPmbzYIYMWx678qcGg9uQga');
INSERT INTO points(food, residential, transport, id_user, id_avatar) VALUES (10, 15, 5, 1, 1);
