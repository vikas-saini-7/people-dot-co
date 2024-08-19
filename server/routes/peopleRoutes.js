const express = require("express");
const {
  getPeople,
  createPeople,
  editPeople,
} = require("../controllers/peopleController");

const router = express.Router();

router.get("/", getPeople);
router.post("/", createPeople);
router.put("/", editPeople);

module.exports = router;
