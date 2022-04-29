const express = require("express");
const router = express.Router();

const serverModel = require("../models/quiz_model");


// get all quizzes route
router.get("/", (req, res) => {
  let quizzes = serverModel.getAllQuizzes();
  res.send(quizzes);
});

// Create route
router.post("/", (req, res) =>{
  let newQuizes = req.body;
  let message;
  let isCreated = serverModel.createQuiz(newQuizes);
  if (isCreated) {
    message = "Created successfully";
  } else {
    message = "quize invalid";
  }
  res.send({ message: message });
});

/**
 * delete quiz
 */
router.delete("/:id",(req,res) =>{
    let id = req.params.id;
    let isDelete = serverModel.removeQuizeById(id);
    let message;
    if(isDelete){
      message = "Deleted successfully";
    }else{
      message = "not delete";
    }
    res.send({ message: message });
})
module.exports = router;
