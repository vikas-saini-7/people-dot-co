const express = require("express");
const {
  getPeople,
  createPeople,
  editPeople,
  deletePeople,
} = require("../controllers/peopleController");

const router = express.Router();

router.get("/", getPeople);
router.post("/", createPeople);
router.put("/", editPeople);
router.delete("/:id", deletePeople);

module.exports = router;
