// Importing Express module
const express = require('express');
var mysql = require('mysql');
const inputCheck = require('./utils/inputCheck');

// Model
const User = require('./models/User'); 

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

// Parse JSON bodies
app.use(express.json());

// Connect to database
const sequelize = require('./config/connection');

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
app.put('/api/users/:id', (req, res) => {
    console.log(req);

    // Get ID from request parameters
    const id = req.params.id;
  
    // Get new user data from request body
    const updatedUserData = req.body;
  
    User.update(updatedUserData, { 
      where: {
        id: id
      }
    })
      .then(updatedUser => {
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error updating user', error: err });
      });
  
  });

// Error handling
app.use((req, res) => {
    res.status(404).end();
});


// Starts server on port 3001
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)});