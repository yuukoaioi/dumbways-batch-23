CREATE DATABASE IF NOT EXISTS programmer;
USE programmer;

CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), photo blob);
CREATE TABLE skill(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));


-- //======================================================================//


-- Tampilkan seluruh data dari table user beserta skill dari user tsb
SELECT * FROM users INNER JOIN skill ON users.id = skill.user_id;

-- (Digabung)
SELECT * FROM users INNER JOIN skill ON skill.user_id = users.id;


-- //======================================================================//


-- Insert seluruh data dengan table yang terkait 
INSERT INTO users (id, name, photo) VALUES (null, "Joko", null), (null, "Pate", null);

-- Insert seluruh data dengan table yang terkait
INSERT INTO skill VALUES (null, "ice", 1), (null, "fire", 2);
INSERT INTO skill VALUES (null, "lemon", 1);


-- //======================================================================//


-- Tampilkan seluruh data user berdasarkan skill tertentu
SELECT * FROM skill INNER JOIN users ON skill.user_id = users.id WHERE skill.name = "fire";

-- Tampilkan spesifik data user dengan skill nya
SELECT * FROM skill INNER JOIN users ON skill.user_id = users.id WHERE users.name = "joko";