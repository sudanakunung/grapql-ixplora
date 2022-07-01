const UserModel = require("../../model/user");

const single_user = function (id) {
  return UserModel.findById(id);
};

module.exports = {
  single_user,
};
