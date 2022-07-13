const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
} = require("graphql");
const PostModel = require("../../model/post/post");
const { get_following, get_follower,followed,roomChat } = require("../resolver/user");


module.exports = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
    token: { type: GraphQLString },
    following: {
      type: GraphQLInt,
      resolve(parent, args) {
        return get_following(parent.id);
      },
    },
    follower: {
      type: GraphQLInt,
      resolve(parent, args) {
        return get_follower(parent.id);
      },
    },
    post: {
      type: new GraphQLList(require("./post")),
      resolve(parent, args) {
        return PostModel.find({ user_id: parent.id });
      },
    },
    followed: {
      type: GraphQLBoolean,
      args: { auth: { type: GraphQLID } },
      resolve(parent, args) {
        return followed(parent.id, args.auth);
      },
    },
    roomChat: {
      type: GraphQLList(require("./roomChat")),
      resolve(parent, args) {
        return roomChat(parent.id);
      },
    },
  }),
});
