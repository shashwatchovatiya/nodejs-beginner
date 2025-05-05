const userService = require("./user.service");

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (error) {
    res.status(400).send("Invalid ID");
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send("Error creating user");
  }
};

const assignProject = async (req, res) => {
  const { userId, projectId } = req.body;
  try {
    if (!userId || !projectId) {
      return res.status(400).send("User not found or Project not found");
    }
    const user = await userService.assignProject(userId, projectId);

    res.json({ message: "Project assigned to user", user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error assigning project to user");
  }
};

const getUserByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;

    if (!projectId) {
      return res.status(400).send("Project ID is required");
    }
    const user = await userService.getUserByProjectId(projectId);

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching user by project ID");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  assignProject,
  getUserByProjectId,
};
