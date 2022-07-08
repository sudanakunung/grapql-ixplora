const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLInputObjectType
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
        args: { id: { type: GraphQLID }},
        resolve(parent, args) {
          return PostModel.findById(args.id);
        },
      },
    },
  });