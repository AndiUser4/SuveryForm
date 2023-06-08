const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

  email: {

    type: String,

    required: true,

    unique: true

  },

  name: {

    type: String,

    required: true

  },

  surname: {

    type: String,

    required: true
  },
  password: {

    type: String,

    required: true
  },

  created_at: {
    type: Date,
    default: Date.now
  }

});



const User = mongoose.model('user', userSchema);




module.exports = User;