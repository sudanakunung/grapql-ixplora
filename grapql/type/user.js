const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const PostModel = require("../../model/post/post");

module.exports = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
    token:{type:GraphQLString},
    post: {
      type: new GraphQLList(require("./post")),
      resolve(parent, args) {
        return PostModel.find({ user_id: parent.id });
      },
    },
  }),
});
