const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('https://cloud.mongodb.com/v2/67f4ad63aba9ed04f4542f2f#/metrics/replicaSet/67f4add002cb0b7b0dde4684/explorer/sample_mflix');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
