const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/Project")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));



const Project = mongoose.model("Project", projectSchema);

app.get("/api/project", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/project/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

app.post("/api/project", async (req, res) => {
  try {
    const { name, description, startDate, endDate, is_Active } = req.body;
    const newProject = new Project({
      name,
      description,
      startDate,
      endDate,
      is_Active,
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});

const port = 8001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
