const RoomChatModel = require("../../model/message/room");
const messageModel = require("../../model/message/message");
const groupRoomChatModel = require("../../model/message/group");
const UserModel = require("../../model/user/user");


const roomChat = function (id) {
  return RoomChatModel.find({ user: id });
};
const last_chat = function (id) {
  return messageModel.findOne({ roomId: id }).sort({ _id: 1 });
};
const groupRoomChat = function (id) {
  return groupRoomChatModel.find({ user: id });
};


module.exports = {
  roomChat,
  last_chat,
  groupRoomChat,
};