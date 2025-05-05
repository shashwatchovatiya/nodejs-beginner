const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mainRouter = require("./api/route");
const bodyParser = require("body-parser");
app.use(express.json());

app.use(bodyParser.urlencoded({ limit: "12mb", extended: true }));
app.use(bodyParser.json({ limit: "12mb", extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/Project")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api", mainRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
};
app.use(errorHandler);
