const mongoose = require("mongoose");
//description of the data is the schema ----property is included inside the schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLenght: 50,
  },
  description: {
    type: String,
    required: true,
    maxLenght: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema);
