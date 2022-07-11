const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.ObjectId, required: true },
  image: { type:String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: Boolean},
});

module.exports = mongoose.model("category", categorySchema);
