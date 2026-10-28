const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error crítico al conectar con SQLite:', err.message);
  } else {
    console.log('Conectado exitosamente a la base de datos SQLite.');
    initDatabase();
  }
});

function initDatabase() {
  const createBookingsTable = `
    CREATE TABLE IF NOT EXISTS reservas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      huesped_nombre TEXT NOT NULL,
      huesped_email TEXT NOT NULL,
      habitacion_titulo TEXT NOT NULL,
      fecha_entrada TEXT NOT NULL,
      fecha_salida TEXT NOT NULL,
      creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const createContactsTable = `
    CREATE TABLE IF NOT EXISTS contactos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      email TEXT NOT NULL,
      mensaje TEXT NOT NULL,
      fecha DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.serialize(() => {
    db.run(createBookingsTable);
    db.run(createContactsTable, (err) => {
      if (!err) {
        console.log('Tablas [reservas] y [contactos] verificadas y listas.');
      }
    });
  });
}

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    server: 'MiHotelApp Backend API',
    port: PORT,
    database: 'SQLite3 Conectada',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  const query = `INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)`;
  db.run(query, [nombre, email, mensaje], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      message: 'Mensaje registrado correctamente.',
      contactoId: this.lastID
    });
  });
});

app.get('/api/contacto', (req, res) => {
  db.all(`SELECT * FROM contactos ORDER BY fecha DESC`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(` Servidor Backend ejecutándose en: http://localhost:${PORT}`);
  console.log(` Endpoint de prueba: http://localhost:${PORT}/api/status`);
  console.log(`===================================================`);
});