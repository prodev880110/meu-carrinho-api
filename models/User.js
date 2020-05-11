const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  passpord: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  store: [{
    type: Schema.Types.ObjectId,
    ref: 'Store'
  }],
  imageUrl: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: {
        type: String,
        enum: ['Point'],
        default: undefined
    },
    coordinates: {
        type: [Number],
        default: undefined
    }
  }
}, {
  timestamps: true
});

const User = model('User', userSchema);

module.exports = User;
