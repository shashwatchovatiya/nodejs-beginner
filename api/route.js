const express = require("express");
const router = express.Router();

// Import feature routers
const userRouter = require("./User/user.route");

// Mount feature routers
router.use("/user", userRouter);

const projectRouter = require("./Project/project.route");
router.use("/project", projectRouter);

module.exports = router;
