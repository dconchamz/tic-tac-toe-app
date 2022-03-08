const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const ENV = {
  development: process.env.NODE_ENV === 'development',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
};

const MONGO = {
  url: process.env.MONGO_URI,
};
module.exports = { PORT, ENV, MONGO };
