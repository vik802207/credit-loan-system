const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');
const User = require('../models/User');

router.get('/stats', async (req, res) => {
  const totalUsers = await User.countDocuments({ role: 'user' });
  const activeLoans = await Loan.countDocuments({ status: 'approved' });
  const cashDisbursed = await Loan.aggregate([
    { $match: { status: 'approved' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);

  res.json({
    totalUsers,
    activeLoans,
    cashDisbursed: cashDisbursed[0]?.total || 0
  });
});

module.exports = router;
