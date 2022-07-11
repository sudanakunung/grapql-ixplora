const graphql = require("graphql");
const PostModel = require("../../model/post/post")
const {single_user} = require("../resolver/user")
const {single_post} = require("../resolver/post");
const {
  following_post,
  near_post,
  recommend_post,
} = require("../resolver/explore");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = graphql;
module.exports = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: require("../type/user"),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return single_user(args.id);
      },
    },
    post: {
      type: require("../type/post"),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return single_post(args);
      },
    },
    near_post: {
      type: GraphQLList(require("../type/post")),
      args: {
        auth: { type: GraphQLID },
        longitude: { type: GraphQLFloat },
        latitude: { type: GraphQLFloat },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return near_post(
          args.auth,
          args.longitude,
          args.latitude,
          args.limit,
          args.offset
        );
      },
    },
    following_post: {
      type: GraphQLList(require("../type/post")),
      args: {
        auth: { type: GraphQLID },
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      resolve(parent, {auth, limit, offset}) {
        return following_post(auth, limit, offset);
      },
    },
    recommend_post: {
      type: GraphQLList(require("../type/post")),
      args: {
        limit: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      resolve(parent, { limit, offset }) {
        return recommend_post(limit, offset);
      },
    },
  },
});