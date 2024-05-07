// Import the Mongoose library for MongoDB connectivity
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb+srv://nafis:nafis@cluster0.ftkxzu3.mongodb.net/Expense-Tracker-System-By-CapTain_N', {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true // Use the new server discovery and monitoring engine
});


const connection = mongoose.connection;

// Event listener for MongoDB connection error
connection.on('error', err => console.log(err));

// Event listener for successful MongoDB connection
connection.on('connected', () => console.log('Mongo DB Connection Successful'));
