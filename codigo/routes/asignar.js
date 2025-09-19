const express = require("express");
const router = express.Router();
const db = require("../db");

// Asignar alumno a carrera
router.post("/", async (req, res) => {
  const { alumnoId, carreraId } = req.body;
  if (!alumnoId || !carreraId) return res.status(400).json({ error: "Faltan datos" });

  try {
    await db.query("UPDATE alumno SET id_carrera=? WHERE id=?", [carreraId, alumnoId]);
    res.json({ msg: "Asignación realizada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
