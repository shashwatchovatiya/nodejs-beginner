const express = require("express");
const router = express.Router();
const projectController = require("./project.controller");

router.get("/", projectController.getAllProject);
router.get("/:id", projectController.getProjectById);
router.post("/", projectController.createProject);
router.post("/assign-user", projectController.assignUser);
router.post("/remove-user", projectController.removeUser);
router.get("/user-projects/:userId", projectController.getProjectByUserId);

module.exports = router;
