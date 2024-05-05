// routes/userRoute.js
const express = require('express')
const User = require('../models/User')
const router = express.Router()

// Endpoint for user login
router.post('/login', async function (req, res) {
    try {
        const result = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (result) {
            res.send(result);
        } else {
            res.status(500).json("Error");
        }
    } catch (error) {
        res.status(500).json(error);
    }

});

// Endpoint for user registration
router.post('/register', async function (req, res) {
    try {
        const newuser = new User(req.body);
        await newuser.save();
        res.send('User Registration Successful')
    } catch (error) {
        res.status(500).json(error);
    }

});

// Export router for use in other files
module.exports = router;

