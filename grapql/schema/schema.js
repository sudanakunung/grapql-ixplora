const {GraphQLSchema} = require("graphql");

const RootQuery = require('../query')
const MutatoinType =require('../mutation')

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation:MutatoinType
});
