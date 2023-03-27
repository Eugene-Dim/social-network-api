const mongoose = require('mongoose');
const dateFormat = require('../utils/data');

const { Schema } = mongoose;

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: [true, 'Reaction body cannot be empty.'],
    maxlength: [280, 'Reaction body cannot exceed 280 characters.']
  },
  username: {
    type: String,
    required: [true, 'Username cannot be empty.']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

module.exports = mongoose.model('Reaction', reactionSchema);
