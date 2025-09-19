const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",      // tu usuario
  password: "1234",  // tu contraseña
  database: "escuela"
});

module.exports = pool;
