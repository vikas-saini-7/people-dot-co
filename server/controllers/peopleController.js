const People = require("../models/peopleModel");

exports.getPeople = async (req, res) => {
  try {
    const people = await People.find();
    res.status(200).json({
      status: "success",
      results: {
        people,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

exports.createPeople = async (req, res) => {
  try {
    const person = await People.create(req.body);
    res.status(201).json({
      status: "success",
      results: {
        person,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

exports.editPeople = async (req, res) => {
  try {
    const person = await People.findByIdAndUpdate(req.body);
    res.status(200).json({
      status: "success",
      results: {
        person,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

exports.deletePeople = async (req, res) => {
  try {
    await People.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      results: null,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
