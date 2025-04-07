const express = require("express");
const router = express.Router();
const User=require("../models/Appication")
const auth=require("../middleware/Auth")
// Get all mapped pickup partners for a specific MCP
router.get("/applications", auth, async (req, res) => {
    try {
      const data = await User.find().sort({ loanAmount: -1 });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch applications", error });
    }
  });

module.exports = router;
