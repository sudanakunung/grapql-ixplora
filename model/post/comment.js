const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const commentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "posts", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  comment: { type: String, max: 200, required: true },
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

commentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("comments", commentSchema);
