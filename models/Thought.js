const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/data');

const { Schema } = mongoose;

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: [true, 'You need to leave a thought!'],
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  reactions: {
    type: [reactionSchema],
    default: []
  }
});

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
