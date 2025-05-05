const projectDao = require("./project.dao");

const getAllProject = async () => {
  return await projectDao.getAllProject();
};

const getProjectById = async (id) => {
  return await projectDao.getProjectById(id);
};

const createProject = async (projectData) => {
  return await projectDao.createProject(projectData);
};

const assignUser = async (projectId, userId) => {
  return await projectDao.assignUser(projectId, userId);
};

const removeUser = async (projectId, userId) => {
  return await projectDao.removeUser(projectId, userId);
};

const getProjectByUserId = async (userId) => {
  return await projectDao.getProjectByUserId(userId);
};

module.exports = {
  getAllProject,
  getProjectById,
  createProject,
  assignUser,
  removeUser,
  getProjectByUserId,
};
