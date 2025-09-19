const express = require("express");
const router = express.Router();
const db = require("../db");

// Listar carreras
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM carrera");
  res.json(rows);
});

// Agregar carrera
router.post("/", async (req, res) => {
  const { nombre } = req.body;
  await db.query("INSERT INTO carrera (nombre) VALUES (?)", [nombre]);
  res.json({ msg: "Carrera agregada" });
});

// Actualizar carrera
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  await db.query("UPDATE carrera SET nombre=? WHERE id=?", [nombre, id]);
  res.json({ msg: "Carrera actualizada" });
});

// Eliminar carrera
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM carrera WHERE id=?", [id]);
  res.json({ msg: "Carrera eliminada" });
});

module.exports = router;
