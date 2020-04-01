const MONGOOSE = require('mongoose');

const USERSCHEMA = new MONGOOSE.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    email: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = MONGOOSE.model('user', USERSCHEMA);
