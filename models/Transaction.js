// models/User.js
const mongoose = require('mongoose')

// Define user schema
const transactionSchema = new mongoose.Schema({
    amount : {
        type : Number,
        required : true
    },

    type : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    reference : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required : true
    }
})

// Create User model from schema
const transactionModel = mongoose.model('Transactions', transactionSchema)

// Export User model for use in other files
module.exports = transactionModel