const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the expensetracker directory
app.use(express.static(path.join(__dirname, 'expensetracker')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'expensetracker', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 