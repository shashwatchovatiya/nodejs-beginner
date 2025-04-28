const User = require("./user.model");

const getAllUsers = () => User.find();

const getUserById = (id) => User.findById(id);

const createUser = (userData) => {
  const user = new User(userData);
  return user.save();
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
