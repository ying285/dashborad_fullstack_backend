const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Orders: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);