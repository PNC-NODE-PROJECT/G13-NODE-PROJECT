const fs = require("fs");
require("dotenv").config();
const {
  v4: uuidv4
} = require("uuid");
const router = require("../routes/quiz_route");

let PATH = "";
if (process.env.NODE_ENV === "production") {
  PATH = "./data/" + process.env.DATABASE_PRODUCTION;
} else {
  PATH = "./data/" + process.env.DATABASE_DEVELOPMENT;
}
// read develop file and

function load() {
  return JSON.parse(fs.readFileSync(PATH));
}
///

/**
 *
 * @param {*} quize
 *
 */
function save(quize) {
  fs.writeFileSync(PATH, JSON.stringify(quize));
}
// get all quize and
function getAllQuizzes() {
  return load();
}

/**
 * 
 * @param {*} idOneQuiz 
 * @returns one quiz
 */
 function getOneQuiz(idOneQuiz){
  let quizzes = load();
  let quiz;
  quizzes.forEach(element => {
      if(element.id === idOneQuiz){
          quiz = element;
      }        
  });
  return quiz;
}
/**
 *
 * @param {*} newQuize :
 * @returns :
 */
function createQuiz(newQuize) {
  let quizzes = load();
  let isValid =
    newQuize.title && newQuize.choose && newQuize.correct && newQuize.score;
  if (isValid) {
    newQuize.id = uuidv4();
    quizzes.push(newQuize);
    save(quizzes);
  }
  return isValid;
}

/**
 * 
 * @param {*} id 
 * @returns remov quiz form data 
 */
function removeQuizeById(id) {
  let quizzes = load();
  let isDeleted;
  if (id != undefined) {
    let index = quizzes.findIndex((quiz) => quiz.id === id);
    if (index >= 0) {
      quizzes.splice(index, 1);
      save(quizzes);
      isDeleted = true;
    } else {
      isDeleted = false;
    }
  }
  return isDeleted;
}
// update question

module.exports = {
  createQuiz,
  getAllQuizzes,
  removeQuizeById,
  getOneQuiz
};