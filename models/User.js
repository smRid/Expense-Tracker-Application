// models/User.js
const mongoose = require('mongoose')

// Define user schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }
})

// Create User model from schema
const usermodel = mongoose.model('Users', userSchema)

// Export User model for use in other files
module.exports = usermodel