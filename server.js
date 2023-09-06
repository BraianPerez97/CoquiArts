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
// index
// Delete User
db.query(`DELETE * FROM users WHERE id=1`, (err, result) => {
    if (err) {
        console.log(err)
    }
    console.log(result)
});
// Create User
app.get("/api/user", (req, res) => {
    const db_call = `INSERT INTO user (first_name, last_name, email, password) VALUES (?,?,?,?)`;

    const params =["Braian", "Perez", 'bapc@gmail.com', '123456789'];

    db.query(db_call, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });

})
// Error handling
app.use((req, res) => {
    res.status(404).end();
});


// Starts server on port 3001
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)});