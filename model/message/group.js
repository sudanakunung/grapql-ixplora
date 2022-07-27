const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const groupchatroomSchema = new mongoose.Schema({
  user: [
    { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  ],
  logo:{type:String},
  name:{type:String},
  lastChat: { type: String },
  date: { type: Date, default: Date.now },
});
groupchatroomSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("groupchatRooms", groupchatroomSchema);
