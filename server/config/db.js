const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongoose.connect("mongodb+srv://vikashg802207:mpv5Kosp5LeY7wf1@cluster0.mongodb.net/credit-loan?retryWrites=true&w=majority");
');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
