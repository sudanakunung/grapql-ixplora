const { GraphQLNonNull, GraphQLString } = require("graphql");

module.exports = {
  type: require("../type/category"),
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args, { res }) => {
        
  },
};
