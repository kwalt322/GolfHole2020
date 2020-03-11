const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  claimed: {
      type: Boolean,
  }
});

module.exports = mongoose.model('Registration', registrationSchema);