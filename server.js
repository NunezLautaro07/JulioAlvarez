import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const database_config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phpmyadmin'
}

const database = mysql.createConnection(database_config);
database.connect((err) => {
    if (err) {
            console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

const createTableQuery = `
        CREATE TABLE IF NOT EXISTS podcast  (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        tema VARCHAR(255) NOT NULL,
        descripcion VARCHAR(255) NOT NULL
        )
        `;

database.query(createTableQuery, (err) => {
    if (err) {
        console.error('Error al crear la tabla de podcast:', err);
    } else {
        console.log('Tabla de podcast creada correctamente');
    }
});
 const podcast = {}
app.post('/podcast', (req, res) => {
    const { nombre, tema, descripcion } = req.body;
    const query = 'INSERT INTO podcast (nombre, tema, descripcion) VALUES (?, ?, ?)';

database.query(query, [nombre, tema, descripcion], (err, result) => {
    if (err) {
        console.error('Error al crear un nuevo podcast:', err);
        res.status(500).json({ error: 'Error al crear un nuevo podcast' });
    } else {
        res.json({ id: result.insertId, nombre, tema, descripcion });
    }
});})

app.get('/podcast', (req, res) => {
    database.query('SELECT * FROM podcast', (err, results) => {
        if (err) {
            console.error('Error al obtener los podcast:', err);
            res.status(500).json({ error: 'Error al obtener los podcast' });
        } else {
            res.json(results);
        }
    });
})
app.delete('/podcast/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM podcast WHERE id = ?';
    
    database.query(query, [id], (err, result) => {
    if (err) {
    console.error('Error al eliminar el podcast:', err);
    res.status(500).json({ error: 'Error al eliminar el podcast' });
    } else {
    if (result.affectedRows > 0) {
    res.json({ message: 'podcast eliminado correctamente' });
    } else {
    res.status(404).json({ error: 'podcast no encontrado' });
    }
    }
    });
    });




app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});