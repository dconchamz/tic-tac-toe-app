const Mongoose = require('mongoose');
const { MONGO } = require('../config');
let isConnected;
let db;

async function connectDB() {
  if (isConnected) return db;
  try {
    db = await Mongoose.connect(MONGO.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    return db;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { connectDB };
