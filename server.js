// Importing Express module
const express = require('express');
var mysql = require('mysql');
const inputCheck = require('./utils/inputCheck');

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
// Get Categories
app.get('/api/categories', (req, res) => {
    db.query(`SELECT * FROM categories`, (err, res) => {
        if (err) throw err;
        req.send(res);
    });
});
// return all users

// GET all users
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


// GET a single user
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
    

// DELETE User
app.delete('/api/user/:id', (req, res) => {
    const db_call = `DELETE FROM user WHERE id=?`;
    const params = [req.params.id];

    db.query(db_call, params, (err, result) => {
        if (err) {
            res.status(400).json({error: res.message});
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

// CREATE User
app.post('/api/user', ({body}, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'email', 'passwd');

    if (errors) {
        res.status(400).json({error: errors});
        return;
    }
    const db_call = `INSERT INTO user (first_name, last_name, email, passwd) VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.email, body.passwd];

    db.query(db_call, params, (err, row) => {
        if (err) {
            res.status(400).json({error: err.message});
            return
        }
        res.json({
            message: 'success',
            data: body
        })
    })

});

// UPDATE User
app.put('/api/user/:id', ({body, params}, res) => {

  const errors = inputCheck(body, 'first_name', 'last_name', 'email', 'passwd');

  if (err) {
    res.status(400).json({error: err.message});
    return;
  }

  const db_call = `UPDATE user SET first_name=?, last_name=?, email=?, passwd=? WHERE id=?`;
  const params = [body.first_name, body.last_name, body.email, body.passwd, params.id];

  db.query(sdb_call, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json({
        message: 'success',
        data: body
      });
    }
  });

});

// Error handling
app.use((req, res) => {
    res.status(404).end();
});


// Starts server on port 3001
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)});