const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('database.db');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ 
    secret: 'supersecretkey', 
    resave: false, 
    saveUninitialized: true 
}));

// Serve static files from the "public" folder
app.use(express.static('public'));

// 1. ROOT ROUTE - Fixes the "Cannot GET /" error
app.get('/', (req, res) => {
    res.redirect('/register.html');
});

// 2. DATABASE SETUP
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

// 3. REGISTER ROUTE
app.post('/register', async (req, res) => {
    try {
        const username = req.body.username;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], function(err) {
            if (err) return res.send("Username already exists!");
            res.redirect('/login.html');
        });
    } catch {
        res.status(500).send("Error creating user");
    }
});

// 4. LOGIN ROUTE
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.get("SELECT password FROM users WHERE username = ?", [username], async (err, row) => {
        if (!row) return res.send("Invalid credentials!");
        
        const match = await bcrypt.compare(password, row.password);
        if (match) {
            req.session.username = username;
            res.redirect('/welcome.html');
        } else {
            res.send("Invalid credentials!");
        }
    });
});

// 5. LOGOUT ROUTE
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login.html');
});

// START SERVER
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});