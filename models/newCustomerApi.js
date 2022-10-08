const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newCustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  NewClients: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("NewCustomer", newCustomerSchema);