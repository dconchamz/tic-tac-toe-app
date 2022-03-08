const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var playSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  player: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Play = mongoose.model('play', playSchema);
module.exports = Play;
