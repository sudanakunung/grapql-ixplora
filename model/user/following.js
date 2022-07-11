const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const followingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  date: { type: Date, default: Date.now },
});
followingSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("following", followingSchema);
