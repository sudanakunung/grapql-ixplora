const { GraphQLNonNull,GraphQLString } = require("graphql");
const { Login } = require("../resolver/user");
const UserModel = require("../../model/user/user");
const bcrypt = require("bcrypt");


module.exports = {
  type: require("../type/user"),
  args: {
    username: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args, { res }) => {
 const user = await UserModel.findOne({ emai: args.email });
 if (!user) return "Email not exist";

 const match = await bcrypt.compare(args.password, user.password);

 if (!match) return "password wrong";
 var token = await jwt.sign({ foo: user.id }, process.env.secret);
 user.token = token;
 res.cookie("token  ", token, {
     httpOnly: true,
     maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return user;
    
  },
};
