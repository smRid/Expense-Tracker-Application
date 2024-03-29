const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omor:01857329586@cluster0.vxgoipz.mongodb.net//Expense-Tracker' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))