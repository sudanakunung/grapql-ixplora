const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
  } = graphql;
const {Login} =require("../resolver/user");


module.exports = new GraphQLObjectType({
    name:"Mutation",
    fields:{
      Login:{
        type:require("../type/user"),
        args:{
          username:{type:GraphQLString},
          password:{type:GraphQLString}
        },
        resolve:async(parent,args,{res})=>{
            const{token,user}=await Login(args)
            res.cookie('token  ',token ,{
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7 // 1 week
              })
            return  user
             
        }
      }
    }
  })