const UserModel = require("../../model/user/user");
const FollowingModel = require("../../model/user/following")
const FollowerModel = require("../../model/user/follower");
const RoomChatModel = require("../../model/message/room")
const messageModel = require("../../model/message/message");
const groupRoomChatModel = require("../../model/message/group");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
require("dotenv").config();

const single_user = function (id) {
  return UserModel.findById(id);
};

const many_user = function(id){
  return UserModel.find({_id:{ $in: id }});
}

const get_following = async function(id){
 return FollowingModel.find({user:id}).countDocuments()
}

const get_follower = async function (id) {
  return FollowerModel.find({ user: id }).countDocuments();
};

const followed = function(comment_user,auth){
   return FollowingModel.find({
     user: auth,
     following: comment_user,
   }).countDocuments();
     
}

module.exports = {
  single_user,
  get_following,
  get_follower,
  followed,
  many_user,

};
