const graphql = require("graphql");
const PostModel = require("../../model/post/post");
const {single_user} = require("../../grapql/resolver/user");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
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
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return PostModel.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
