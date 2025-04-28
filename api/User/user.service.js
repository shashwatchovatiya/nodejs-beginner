const userDao = require("./user.dao");

const getAllUsers = async () => {
  return await userDao.getAllUsers();
};

const getUserById = async (id) => {
  return await userDao.getUserById(id);
};

const createUser = async (userData) => {
  return await userDao.createUser(userData);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
