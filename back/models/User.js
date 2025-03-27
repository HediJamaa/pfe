const { default: _default } = require("concurrently");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "user",
  },
    phone: {
    type: String,
    required: true,
  },  location: {
    type: String,
    required: true,
  },  postalCode: {
    type: String,
    required: true,
  },
  img: String,
});

module.exports = mongoose.model("user", UserSchema);
