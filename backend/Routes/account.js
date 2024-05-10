// backend code (account.js)
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account,User } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    });
});

router.post("/transfer", authMiddleware, async (req, res) => {
    try {
         const sess=req.body
         const  amount=sess.amount;
         const  to=sess.to;
         const user1=req.userId;
         const user2=await User.findOne({_id:to});
         if(!user2){
            res.json({mssg:"user not exist"})
         }
          await Account.updateOne({ user1 }, { $inc: { amount: -amount } });
          await Account.updateOne({to},{$inc:{amount:amount}});
         

    } catch (error) {
        console.error("Error occurred during transfer:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
