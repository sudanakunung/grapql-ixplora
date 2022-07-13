const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const chatroomSchema = new mongoose.Schema({
  user: [
    { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  ],
  lastChat: { type: String },
  date: { type: Date, default: Date.now },
});
chatroomSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("chatRooms", chatroomSchema);
