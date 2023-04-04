const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const reactionSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

reactionSchema.virtual('formattedDate').get(function () {
  return this.createdAt.toLocaleDateString();
});

module.exports = mongoose.model('Reaction', reactionSchema);
