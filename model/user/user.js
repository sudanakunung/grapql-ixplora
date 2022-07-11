const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const userSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  avatar: { type: String, default: null },
  email: { type: String, required: true, max: 255, min: 6 },
  phone: { type: Number, required: false, max: 255, min: 6 },
  password: { type: String },
  bio: { type: String },
  loginWith: {
    type: String,
    enum: ["google", "facebook", "register"],
    required: true,
  },
  dateJoin: { type: Date, default: Date.now },
});
const index = { name: "text", email: "text" };
userSchema.index(index);
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("users", userSchema);
