const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const followerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  date: { type: Date, default: Date.now },
});
followerSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("follower", followerSchema);
