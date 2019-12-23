const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List"
  }
});

module.exports = mongoose.model("Item", itemSchema);