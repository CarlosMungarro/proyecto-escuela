CREATE DATABASE escuela;

USE escuela;

CREATE TABLE carrera (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE alumno (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  id_carrera INT,
  FOREIGN KEY (id_carrera) REFERENCES carrera(id)
);



