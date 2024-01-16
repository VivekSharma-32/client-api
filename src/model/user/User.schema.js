const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  company: {
    type: String,
    maxLength: 50,
    required: true,
  },
  address: {
    type: String,
    maxLength: 100,
  },
  phone: {
    type: Number,
    maxLength: 11,
  },
  email: {
    type: String,
    maxLength: 50,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 100,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
