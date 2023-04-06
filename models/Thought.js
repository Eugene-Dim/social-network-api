const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/data');
const reactionSchema = require('./Reaction');

class ThoughtClass {
  get reactionCount() {
    return this.reactions.length;
  }
}

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

thoughtSchema.loadClass(ThoughtClass);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
