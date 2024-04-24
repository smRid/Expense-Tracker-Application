const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router()


router.post('/add-transaction', async function (req, res) {
    try {
        const newtransaction = new Transaction(req.body);
        await newtransaction.save();
        res.send('Transaction Added Successfully')
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/get-all-transactions",async(req,res) => {
  try {
    const transaction = await Transaction.find({})
    response.send(transaction)
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;

