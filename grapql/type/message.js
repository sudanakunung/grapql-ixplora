const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");
const { many_user } = require("../resolver/user");
module.exports = new GraphQLObjectType({
  name: "message",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    user: {
      type: GraphQLList(require("./user")),
      async resolve(parent, args) {
        // const user_id = parent.user.find((user) => user._id != args.auth);
        return many_user(parent.user);
      },
    },
    date: {
      type: GraphQLString,
    },
    message: { type: GraphQLString },
    room: {
      type: GraphQLID,
    },
  }),
});