// routes/userRoute.js
const express = require('express')
const Transaction = require('../models/Transaction')
const router = express.Router()

// Endpoint for transaction
router.post('/add-transaction', async function (req, res) {
    try {
        const newtransaction = new Transaction(req.body);
        await newtransaction.save();
        res.send('Transaction Added Successful')
    } catch (error) {
        res.status(500).json(error);
    }

});


router.get('/get-all-transactions', async (req, res) => {
    try {
        const transactions = await Transaction.Find({})
        response.send(transactions)
    } catch (error) {
        res.status(500).json(error);
    }
})
// Export router for use in other files
module.exports = router;

