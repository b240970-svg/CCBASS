const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connString = process.env.MONGODB_URI;
    if (!connString) {
      console.error('Error: MONGODB_URI environment variable is missing.');
      process.exit(1);
    }
    const conn = await mongoose.connect(connString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
