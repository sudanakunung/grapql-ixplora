const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,

} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "category",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
  }),
});
