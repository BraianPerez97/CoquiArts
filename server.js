// Importing Express module
const express = require('express');
var mysql = require('mysql');

// Port designation
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// MySQL connection
var db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'coquiArts'
    },
    console.log(`Database connection sucessful.`)
)

// Routes

// return all users
app.get('/api/user', (req, res) => {
    
    const db_call = `SELECT * FROM user`;

    db.query(db_call, (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// get a single candidate
app.get('/api/user/:id', (req, res) => {
    const db_call = `SELECT * FROM user WHERE id=?`;
    const params = [req.params.id];

    db.query(db_call, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});
    

// Delete User
app.delete('/api/users', (req, res) => {
    const db_call = `DELETE FROM user WHERE id = ?`;
    const params = [req.params.id];

    db.query(db_call, params, (err, result) => {
        if (err) {
            res.status(400).json({error: err.message});
        } else if (!result.affectedRows) {
        res.json({
            message: 'success'
    });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});
// Create User
app.get('/api/user/:id', (req, res) => {
    const db_call = `INSERT INTO user (first_name, last_name, email, password) VALUES (?,?,?,?)`;

    const params =['Braian', 'Perez', 'bapc@gmail.com', '123456789'];

    db.query(db_call, params, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
        }
        res.json({
            message: 'success',
            data: rows
    });
});
})

// Error handling
app.use((req, res) => {
    res.status(404).end();
});


// Starts server on port 3001
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)});