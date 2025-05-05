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

const assignProject = async (userId, ProjectId) => {
  return await userDao.assignProject(userId, ProjectId);
};

const getUserByProjectId = async (projectId) => {
  if (!projectId) throw new Error("Project not found");
  return await userDao.getUserByProjectId(projectId);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  assignProject,
  getUserByProjectId,
};
