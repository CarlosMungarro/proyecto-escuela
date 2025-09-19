const express = require("express");
const router = express.Router();
const db = require("../db");

// Listar alumnos
router.get("/", async (req, res) => {
  const [rows] = await db.query(`
    SELECT alumno.id, alumno.nombre, carrera.nombre AS carrera
    FROM alumno
    LEFT JOIN carrera ON alumno.id_carrera = carrera.id
  `);
  res.json(rows);
});

// Agregar alumno
router.post("/", async (req, res) => {
  const { nombre, id_carrera } = req.body;
  await db.query("INSERT INTO alumno (nombre, id_carrera) VALUES (?, ?)", [nombre, id_carrera]);
  res.json({ msg: "Alumno agregado" });
});

// Actualizar alumno
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, id_carrera } = req.body;
  await db.query("UPDATE alumno SET nombre=?, id_carrera=? WHERE id=?", [nombre, id_carrera, id]);
  res.json({ msg: "Alumno actualizado" });
});

// Eliminar alumno
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM alumno WHERE id=?", [id]);
  res.json({ msg: "Alumno eliminado" });
});

module.exports = router;
