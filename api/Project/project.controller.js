const projectService = require("./project.service");

const getAllProject = async (req, res) => {
  try {
    const projects = await projectService.getAllProject();
    res.json(projects);
  } catch (error) {
    res.status(500).send("Error fetching projects");
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if (!project) return res.status(404).send("Project not found");
    res.json(project);
  } catch (error) {
    res.status(400).send("Invalid ID");
  }
};

const createProject = async (req, res) => {
  try {
    const newProject = await projectService.createProject(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).send("Error creating project");
  }
};

const assignUser = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    const project = await projectService.assignUser(projectId, userId);
    res.json({ message: "User assigned to project", project: project });
    if (!project) return res.status(404).json({ message: "Project not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    const project = await projectService.removeUser(projectId, userId);

    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "User removed from project", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProjectByUserId = async (req, res) => {
  try {
    if (!req.params.userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const { userId } = req.params;
    const project = await projectService.getProjectByUserId(userId);
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProject,
  getProjectById,
  createProject,
  assignUser,
  removeUser,
  getProjectByUserId,
};
