
const express = require("express");
const router = express.Router();
const Loan=require("../models/Appication")

const auth=require("../middleware/Auth")


router.put('/loansStatus/:id', auth, async (req, res) => {
    try {
      const updated = await Loan.findByIdAndUpdate(
        req.params.id,
        { verifierStatus: req.body.verifierStatus },
        { new: true }
      );
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: "Failed to update verifier status" });
    }
  });
  module.exports = router;
  