const express = require('express');
const dotenv = require('dotenv');

// Import required modules

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('GitHub Actions with Node.js, webservice is running successfully!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;