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

module.exports = {
  getAllProject,
  getProjectById,
  createProject,
};
