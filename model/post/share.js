const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "posts", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("share", shareSchema);
