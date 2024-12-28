const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const path = require('path');
const app = express();

// Middleware pour parser le JSON
app.use(bodyParser.json());

// Servir les fichiers statiques (HTML, CSS, JS du front-end)
app.use(express.static(path.join(__dirname, '../public')));

// Route pour récupérer les todos
app.get('/todos', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM todos');
    res.json(rows);
});

// Route pour ajouter un todo
app.post('/todos', async (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const [result] = await pool.query('INSERT INTO todos (title) VALUES (?)', [title]);
    res.status(201).json({ id: result.insertId, title });
});

// Route pour supprimer un todo
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM todos WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }
});

// Route par défaut pour la racine (http://localhost:3000)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
