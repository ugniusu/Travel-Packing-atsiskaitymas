const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, "Please add item"],
  },
  quantity: {
    type: Number,
    required: [true, "Please add quantity"],
  },
  isPacked: {
    type: Boolean,
    required: [true, "Please mark if it's checked"],
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
