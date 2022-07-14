const { GraphQLObjectType, GraphQLID, GraphQLString,GraphQLList } = require("graphql");
const { single_user } = require("../resolver/user");
module.exports = new GraphQLObjectType({
  name: "location",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLString,
    },
    owner: {
      type: new GraphQLList(require("./user")),
      resolve(parent, args) {
        return single_user(parent.owner);
      },
    },
  }),
});
