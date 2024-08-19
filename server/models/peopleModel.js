const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"], // You can adjust the statuses as needed
      default: "Active",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"], // You can adjust the gender options as needed
    },
    nationality: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    work_email: {
      type: String,
      required: true,
      unique: true,
    },
    teams: {
      type: [String], // Array of strings
      required: true,
    },
  },
  { timestamps: true }
); // Add timestamps option

const People = mongoose.model("People", peopleSchema);

module.exports = People;
