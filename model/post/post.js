const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  caption: { type: String },
  url: { type: String },
  width: { type: Number },
  height: { type: Number },
  likes: { type: Number, default: 0 },
  view: { type: Number, default: 0 },
  publish: { type: Boolean, required: true },
  type: { type: String, enum: ["photo", "video"], required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: "locations" },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("posts", postSchema);
