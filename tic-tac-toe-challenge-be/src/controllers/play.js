const { v4 } = require('uuid');
const Play = require('../db/models/play');

async function playController(req, res) {
  try {
    const { player, status } = req.body;
    const uuid = v4();

    const newPlay = new Play({ uuid, player, status });
    return res.status(201).json(await newPlay.save());
  } catch (error) {}
}

module.exports = {
  playController,
};
