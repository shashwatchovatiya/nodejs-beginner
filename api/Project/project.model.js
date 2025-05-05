const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  is_Active: { type: Boolean, default: false },
  is_Member: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
