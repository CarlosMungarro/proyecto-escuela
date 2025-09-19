const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de la API
const alumnosRouter = require("./routes/alumnos");
const carrerasRouter = require("./routes/carreras");
const asignarRouter = require("./routes/asignar");

app.use("/api/alumnos", alumnosRouter);
app.use("/api/carreras", carrerasRouter);
app.use("/api/asignar", asignarRouter);

// Servir HTML, JS, CSS desde la carpeta 'pagina'
app.use(express.static(path.join(__dirname, "..", "pagina")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pagina", "index.html"));
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

