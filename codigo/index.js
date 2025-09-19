const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const alumnosRouter = require("./routes/alumnos");
const carrerasRouter = require("./routes/carreras");
const asignarRouter = require("./routes/asignar");

app.use("/api/alumnos", alumnosRouter);
app.use("/api/carreras", carrerasRouter);
app.use("/api/asignar", asignarRouter);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

