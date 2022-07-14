const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");
const { single_user } = require("../resolver/user");
const { last_chat } = require("../resolver/message")
module.exports = new GraphQLObjectType({
  name: "roomChat",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    date: {
      type: GraphQLString,
    },
    last_chat: {
      type: require("./message"),
      async resolve(parent) {        
        return last_chat(parent.id);
      },
    },
    user: {
      type: require("./user"),
      args: { auth: { type: GraphQLID } },
      async resolve(parent, args) {
        const user_id = parent.user.find((user) => user._id != args.auth);
        return single_user(user_id);
      },
    },
  }),
});
