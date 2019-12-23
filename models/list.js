const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  sharedUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  items: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Item"
  }]
});

module.exports = mongoose.model("List", listSchema);