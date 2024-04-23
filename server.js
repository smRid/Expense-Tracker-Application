// Import required modules
const express = require('express');

const dbConnect = require('./dbConnect')
// const mongoose = require('mongoose');

// Initialize Express app
const app = express();
app.use(express.json())
const userRoute = require('./routes/usersRoute')
app.use('/api/users/', userRoute)
// Define server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});