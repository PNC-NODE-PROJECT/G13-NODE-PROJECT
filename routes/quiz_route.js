const express = require("express");
const router = express.Router();

const serverModel = require("../models/quiz_model");

// Create route
router.post("/", (req, res) => {
  let newQuizes = req.body;
  let message;
  let isCreated = serverModel.createQuize(newQuizes);
  if (isCreated) {
    message = "Created successfully";
  } else {
    message = "quize invalid";
  }
  res.send({ message: message });
});


module.exports = router;
