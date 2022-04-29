const express = require("express");
const router = express.Router();

const serverModel = require("../models/quiz_model");



router.get("/",(req, res) => {
  res.send(serverModel.getAllQuizzes());
})
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
