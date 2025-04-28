const Project = require("./project.model");

const getAllProject = () => Project.find();

const getProjectById = (id) => Project.findById(id);

const createProject = (projectData) => {
  const project = new Project(projectData);
  return project.save();
};

module.exports = {
  getAllProject,
  getProjectById,
  createProject,
};
