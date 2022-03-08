const express = require('express');
const play = require('./play');
const routes = express.Router();

routes.use('/api/v1', play);

module.exports = routes;
