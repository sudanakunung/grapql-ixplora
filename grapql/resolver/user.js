const UserModel = require("../../model/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
require("dotenv").config();

const single_user = function (id) {
  return UserModel.findById(id);
};
const Login = async function(req){
 const user= await UserModel.findOne({emai:req.email})
  if(!user)return 'Email not exist';

  const match=await bcrypt.compare(req.password, user.password)
  console.log(match)
  if(!match)return 'password wrong';
  var token = await jwt.sign({ foo: user.id }, process.env.secret);
  user.token = token;
  return {token,user};
}
const Register = async function(req){

}

module.exports = {
  single_user,
  Login,
  Register
};
