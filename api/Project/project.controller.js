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

module.exports = {
  getAllProject,
  getProjectById,
  createProject,
};
