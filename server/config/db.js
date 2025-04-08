const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vikashg802207:mpv5Kosp5LeY7wf1@credit-loan.sksmh36.mongodb.net/?retryWrites=true&w=majority&appName=credit-loan');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
