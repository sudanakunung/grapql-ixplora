const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");
const { last_chat } = require("../resolver/message");
module.exports = new GraphQLObjectType({
  name: "GrouproomChat",
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
    name: {
      type: GraphQLString,
    },
    logo: {
      type: GraphQLString,
    },

  }),
});
