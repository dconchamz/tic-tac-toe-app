//require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const { connectDB } = require('./db');
// configure bodyparser and cors

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

const startDB = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
};

const routes = require('./routes');
//set api routes
startDB();
app.use(routes);

module.exports = app;
