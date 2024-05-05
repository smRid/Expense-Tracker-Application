// Import required modules
const express = require('express');
const dbConnect = require('./dbConnect'); // Import the database connection module

// const mongoose = require('mongoose');

// Import userRoute for handling user-related API endpoints
const userRoute = require('./routes/usersRoute')


// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON requests


// Use the userRoute for API endpoints related to users
app.use('/api/users', userRoute);


// Define server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});