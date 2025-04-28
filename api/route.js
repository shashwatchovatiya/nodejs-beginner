const express = require("express");
const router = express.Router();

// Import feature routers
const userRouter = require("./User/route");

// Mount feature routers
router.use("/user", userRouter); // your API will be: /api/user/...

const projectRouter = require("./Project/route");
router.use("/project", projectRouter);

module.exports = router;
