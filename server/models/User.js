const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['verifier', 'admin'], default: 'verifier' },
  walletBalance: {
    type: Number,
    default: 0
  },
  AdminWhoAddYou: [{ type: mongoose.Schema.Types.ObjectId}],
});

module.exports = mongoose.model('User', userSchema);
