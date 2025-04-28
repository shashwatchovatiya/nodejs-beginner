const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  is_Active: { type: Boolean, default: false },
});

module.exports = projectSchema;
