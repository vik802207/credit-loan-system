
const express = require("express");
const router = express.Router();
const Loan=require("../models/Appication")

const auth=require("../middleware/Auth")


router.put('/loan/:id', auth, async (req, res) => {
    const loanApp = await Loan.findById(req.params.id);
    const walletBalance = loanApp.walletBalance;
    const loanAmount = loanApp.loanAmount;
    const newbalance=loanAmount+walletBalance;
    console.log(newbalance);
    console.log(req.body.adminStatus);
    try {
      const updated = await Loan.findByIdAndUpdate(
        req.params.id,
        {
          adminStatus: req.body.adminStatus,
          walletBalance: req.body.adminStatus === 'verified' ? newbalance : walletBalance
        },
        { new: true }
      );
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: "Failed to update verifier status" });
    }
  });
  module.exports = router;
  