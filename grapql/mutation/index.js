const { GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
    name:"Mutation",
    fields:{
      Login:require('./login.js')
    }
  })