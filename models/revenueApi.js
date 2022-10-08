const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const revenueSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Revenue: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Revenue", revenueSchema);