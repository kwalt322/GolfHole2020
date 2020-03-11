const mongoose = require('mongoose');

const golfholeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  claimed: {
      type: Boolean,
  }
});

module.exports = mongoose.model('GolfHole', golfholeSchema);