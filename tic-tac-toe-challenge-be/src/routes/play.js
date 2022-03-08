const { Router } = require('express');
const routes = Router();

const { playController } = require('../controllers/play');

routes.post('/play', playController);

module.exports = routes;
