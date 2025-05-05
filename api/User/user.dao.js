const User = require("./user.model");
const Project = require("../Project/project.model");

const getAllUsers = () => User.find();

const getUserById = (id) => User.findById(id);

const createUser = (userData) => {
  const user = new User(userData);
  return user.save();
};

const assignProject = async (userId, projectId) => {
  const user = await User.findById(userId);
  const project = await Project.findById(projectId);
  if (!user) throw new Error("User not found");
  if (!project) throw new Error("Project not found");

  if (!user.project_ids.includes(projectId)) {
    user.project_ids.push(projectId);

    await user.save();
  }

  if (!project.is_Member.includes(userId)) {
    project.is_Member.push(userId);

    await project.save();
  }
};

// const getUserByProjectId = async (projectId) => {
//   if (!projectId) throw new Error("Project ID is required");

//   const project = await Project.findById(projectId);
//   if (!project) throw new Error("Project not found");

//   return project;
// };

const getUserByProjectId = async (projectId) => {
  if (!projectId) throw new Error("Project ID is required");

  // Find users whose `project_ids` array includes this projectId
  const users = await User.find({ project_ids: projectId });

  return users.length > 0 ? users : [];
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  assignProject,
  getUserByProjectId,
};
