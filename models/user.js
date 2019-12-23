const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lists: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "List"
  }],
  sharedLists: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "List"
  }]
});

module.exports = mongoose.model("User", userSchema);