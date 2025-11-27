const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve Static Files (HTML, CSS, JS)
// This tells Node to look in the current folder for your HTML files
app.use(express.static(__dirname));

// 2. Define Routes for your 4 Pages
// This ensures that going to /about loads about.html, etc.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/favorites', (req, res) => {
    res.sendFile(path.join(__dirname, 'favorites.html'));
});

app.get('/top100', (req, res) => {
    res.sendFile(path.join(__dirname, 'top100.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// 3. Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});