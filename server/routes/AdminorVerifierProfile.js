const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const User= require("../models/User");\
const User=require('../models/User')
const router = express.Router();


// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  // console.log(token);

      if (!token) return res.status(401).json({ message: "Access Denied" });

 // Verify token using jsonwebtoken
        try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Verified", verified);
    req.user = verified;
    console.log("id", req.user.id);
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

// User Profile Route
router.get("/profile",authMiddleware, (req, res) => {
  // console.log(req.user.id);
  User.findById(req.user.id).then((user) => {
    res.json({name: user.name,email: user.email,role: user.role});
  }).catch((err) => {return res.status(404).json({ message: "User not found" })});
  // const user = User.find((u) => u.id === req.user.id);
  // if (!user) return res.status(404).json({ message: "User not found" });
  // res.json({ name: user.name, email: user.email, role: user.role });
});

module.exports = router;
