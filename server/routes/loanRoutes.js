const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');
const User = require('../models/User');

// Apply for loan
router.post('/', async (req, res) => {
  const { userId, amount, reason } = req.body;
  const loan = await Loan.create({ user: userId, amount, reason });
  res.json(loan);
});

// User-specific loans
router.get('/user/:id', async (req, res) => {
  const loans = await Loan.find({ user: req.params.id });
  res.json(loans);
});

// Pending loans for verifier
router.get('/pending', async (req, res) => {
  const loans = await Loan.find({ status: 'pending' }).populate('user');
  res.json(loans);
});

// Update status
router.put('/:id/status', async (req, res) => {
  const { status, verifierId } = req.body;
  const loan = await Loan.findByIdAndUpdate(req.params.id, {
    status,
    verifier: verifierId
  }, { new: true });
  res.json(loan);
});

// Admin: all loans
router.get('/all', async (req, res) => {
  const loans = await Loan.find().populate('user verifier');
  res.json(loans);
});

module.exports = router;
