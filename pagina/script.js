const API = "http://localhost:3000/api";

// Mostrar secciones principales
function mostrarSeccion(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".subsection").forEach(sub => sub.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Mostrar subsecciones (dentro de alumnos/carreras)
function mostrarSubseccion(id) {
  const parent = document.getElementById(id).parentElement;
  parent.querySelectorAll(".subsection").forEach(sub => sub.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// === Funciones alumnos ===
async function agregarAlumno() {
  const nombre = document.getElementById("alumnoNombre").value;
  if (!nombre) return alert("Escribe el nombre del alumno");

  await fetch(`${API}/alumnos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre })
  });

  document.getElementById("alumnosResultado").innerText = "Alumno agregado ✅";
  listarAlumnos();
}

async function actualizarAlumno() {
  const id = document.getElementById("alumnoIdUpdate").value;
  const nombre = document.getElementById("alumnoNombreUpdate").value;
  if (!id || !nombre) return alert("Faltan datos");

  await fetch(`${API}/alumnos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre })
  });

  document.getElementById("alumnosResultado").innerText = "Alumno actualizado ✅";
  listarAlumnos();
}

async function eliminarAlumno() {
  const id = document.getElementById("alumnoIdDelete").value;
  if (!id) return alert("Escribe el ID del alumno");

  await fetch(`${API}/alumnos/${id}`, { method: "DELETE" });

  document.getElementById("alumnosResultado").innerText = "Alumno eliminado ✅";
  listarAlumnos();
}

async function listarAlumnos() {
  const res = await fetch(`${API}/alumnos`);
  const datos = await res.json();
  const lista = document.getElementById("listaAlumnos");
  lista.innerHTML = "";
  datos.forEach(a => {
    const li = document.createElement("li");
    li.textContent = `${a.id} - ${a.nombre} (Carrera: ${a.carrera ?? "Sin asignar"})`;
    lista.appendChild(li);
  });
}

// === Funciones carreras ===
async function agregarCarrera() {
  const nombre = document.getElementById("carreraNombre").value;
  if (!nombre) return alert("Escribe el nombre de la carrera");

  await fetch(`${API}/carreras`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre })
  });

  document.getElementById("carrerasResultado").innerText = "Carrera agregada ✅";
  listarCarreras();
}

async function actualizarCarrera() {
  const id = document.getElementById("carreraIdUpdate").value;
  const nombre = document.getElementById("carreraNombreUpdate").value;
  if (!id || !nombre) return alert("Faltan datos");

  await fetch(`${API}/carreras/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre })
  });

  document.getElementById("carrerasResultado").innerText = "Carrera actualizada ✅";
  listarCarreras();
}

async function eliminarCarrera() {
  const id = document.getElementById("carreraIdDelete").value;
  if (!id) return alert("Escribe el ID de la carrera");

  await fetch(`${API}/carreras/${id}`, { method: "DELETE" });

  document.getElementById("carrerasResultado").innerText = "Carrera eliminada ✅";
  listarCarreras();
}

async function listarCarreras() {
  const res = await fetch(`${API}/carreras`);
  const datos = await res.json();
  const lista = document.getElementById("listaCarreras");
  lista.innerHTML = "";
  datos.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.id} - ${c.nombre}`;
    lista.appendChild(li);
  });
}

// === Funciones asignación ===
async function asignarAlumnoCarrera() {
  const alumnoId = document.getElementById("alumnoId").value;
  const carreraId = document.getElementById("carreraId").value;

  if (!alumnoId || !carreraId) return alert("Escribe ambos IDs");

  await fetch(`${API}/asignar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ alumnoId, carreraId })
  });

  document.getElementById("asignarResultado").innerText = "Asignación realizada ✅";
  listarAlumnos();
}
