const mongoose = require('mongoose'); 

const task = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isDone:{
        type:Boolean,
        required:true
    }
  },
  {
    timestamps: true,
    collection: 'tasks',
  }
);

module.exports = mongoose.model('task', task);