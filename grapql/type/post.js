const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");

const {
  comments,
  liked,
  share,
  comment_count,
  like_count,
} = require("../resolver/post");
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
        return like_count(parent.id);
      },
    },
    liked: {
      type: GraphQLBoolean,
      args: { auth: { type: GraphQLID } },
      resolve(parent, args) {
        return liked(parent._id, args.auth);
      },
    },
    comments: {
      type: new GraphQLList(commentType),
      args: { limit: { type: GraphQLInt }, offset: { type: GraphQLInt } },
      resolve(parent, args) {
        return comments(parent.id, args.limit, args.offset);
      },
    },
    user: {
      type: require("./user"),
      resolve(parent, args) {
        return single_user(parent.user);
      },
    },
    comment_count: {
      type: GraphQLInt,
      resolve(parent) {
        return comment_count(parent.id);
      },
    },
    share: {
      type: GraphQLInt,
      resolve(parent, args) {
        return share(parent.id);
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
