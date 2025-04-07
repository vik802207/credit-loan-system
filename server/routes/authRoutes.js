const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log(`User ${email}`);
    }
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log(token);
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});
// Optional: For initial testing
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
  
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({ name, email, password: await bcrypt.hash(password, 10), role });

    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});


module.exports = router;
