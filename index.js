const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mainRouter = require("./api/route");
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/Project")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api", mainRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
