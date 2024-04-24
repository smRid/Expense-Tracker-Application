// Import the Mongoose library for MongoDB connectivity
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb+srv://omor:01857329586@cluster0.vxgoipz.mongodb.net/', {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true // Use the new server discovery and monitoring engine
});

// Get the default connection object from Mongoose
const connection = mongoose.connection;

// Event listener for MongoDB connection error
connection.on('error', err => console.log(err));

// Event listener for successful MongoDB connection
connection.on('connected', () => console.log('Mongo DB Connection Successful'));
