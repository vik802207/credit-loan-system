const express = require("express");
const router = express.Router();
const User = require("../models/Appication");
const auth = require("../middleware/Auth");

// Get all applications where verifierStatus is 'verified'
router.get("/applications", auth, async (req, res) => {
  try {
    const data = await User.find({ verifierStatus: "verified" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications", error });
  }
});

module.exports = router;
