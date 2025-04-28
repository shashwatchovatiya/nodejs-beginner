const express = require('express');
const router = express.Router();
const projectController = require('./project.controller');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', projectController.createProject);

module.exports = router;