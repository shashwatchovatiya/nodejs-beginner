const Project = require("./project.model");
const User = require("../User/user.model");

const getAllProject = () => Project.find();

const getProjectById = (id) => Project.findById(id);

const createProject = (projectData) => {
  const json = {
    name: projectData.name,
    description: projectData.description,
    startDate: new Date(projectData.startDate),
    endDate: new Date(projectData.endDate),
    is_Active: projectData.is_Active || false,
    is_Member: projectData.is_Member || [],
  };
  const project = new Project(json);
  return project.save();
};

const assignUser = async (projectId, userId) => {
  const project = await Project.findById(projectId);
  const user = await User.findById(userId);
  if (!project) throw new Error("Project not found");
  if (!user) throw new Error("User not found");

  if (!project.is_Member.includes(userId)) {
    project.is_Member.push(userId);
    await project.save();
  }

  if (!user.project_ids.includes(projectId)) {
    user.project_ids.push(projectId);
    await project_ids.save();
  }
};

const removeUser = async (projectId, userId) => {
  const project = await Project.findById(projectId);
  if (!project) throw new Error("Project not found");

  project.is_Member = project.is_Member.filter((r) => r.toString() !== userId);

  await project.save();
  return project;
};

const getProjectByUserId = async (userId) => {
  return await Project.find({ is_Member: userId, is_Active: true }).select(
    "name description startDate endDate "
  );
};

module.exports = {
  getAllProject,
  getProjectById,
  createProject,
  assignUser,
  removeUser,
  getProjectByUserId,
};
