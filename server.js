const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, Images) from the current directory
// This allows the browser to load your .html files and any assets
app.use(express.static(__dirname));

// --- Define Routes for your 4 Pages ---
// These ensure that clean URLs (without .html) work correctly

// Home Page Route (http://localhost:3000/)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Favorites Page Route (http://localhost:3000/favorites)
app.get('/favorites', (req, res) => {
    res.sendFile(path.join(__dirname, 'favorites.html'));
});

// Top 100 Page Route (http://localhost:3000/top100)
app.get('/top100', (req, res) => {
    res.sendFile(path.join(__dirname, 'top100.html'));
});

// About Page Route (http://localhost:3000/about)
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});