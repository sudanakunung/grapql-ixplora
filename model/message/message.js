const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const messageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chatRooms",
    required: true,
  },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
messageSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("messages", messageSchema);
