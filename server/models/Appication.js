// models/LoanApplication.js
const mongoose = require('mongoose');

const LoanApplicationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required: true,
  },
  walletBalance: { type: Number, default: 0 },
  email: { 
    type: String, 
    required: true,
    unique: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  loanTenure: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
  },
  employmentStatus: {
    type: String,
    required: true,
  },
  employmentAddress1: {
    type: String,
    required: true,
  },
  employmentAddress2: {
    type: String,
    required: false,
  },
  acceptedTerms: {
    type: Boolean,
    required: true,
  },
  verifierStatus: {
    type: String,
    default: 'not-verified',
    enum: ['not-verified', 'verified', 'rejected'],
  },
  adminStatus: {
    type: String,
    default: 'not-reviewed',
    enum: ['not-reviewed', 'approved', 'rejected'],
  },
  consentDisclosure: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'approved', 'rejected'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('LoanApplication', LoanApplicationSchema);
