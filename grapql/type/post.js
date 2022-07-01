const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const LikeModel = require("../../model/post/like");
const CommentModel = require("../../model/post/comment");
const { single_user } = require("../resolver/user");

module.exports = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    caption: { type: GraphQLString },
    width: { type: GraphQLString },
    height: { type: GraphQLString },
    url: { type: GraphQLString },
    type: { type: GraphQLString },
    like_count: {
      type: GraphQLInt,
      resolve(parent, args) {
        return LikeModel.find({ post: parent._id }).countDocuments();
      },
    },
    liked: {
      type: GraphQLInt,
      args: { auth: { type: GraphQLID } },
      resolve(parent, args) {
        return LikeModel.find({
          post: parent._id,
          user: args.auth,
        }).countDocuments();
      },
    },
    comments: {
      type: new GraphQLList(commentType),
      resolve(parent, args) {
        return CommentModel.find({ post: parent.id });
      },
    },
    user: {
      type: require("./user"),
      resolve(parent, args) {
        return single_user(parent.user);
      },
    },
  }),
});

const commentType = new GraphQLObjectType({
  name: "comment",
  fields: () => ({
    user: {
      type: require("./user"),
      resolve(parent, args) {
        return single_user(parent.user);
      },
    },
    comment: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});
