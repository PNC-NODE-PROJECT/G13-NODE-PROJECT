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
 * @param {*} newQuize :
 * @returns :
 */
function createQuize(newQuize) {
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

// remove question by id

function removeQuizeById(id) {
  let quizzes = load();
  let isDeleted;
  if (id != undefined) {
    let index = quizzes.findIndex((quize) => quize.id === id);
    if (index >= 0) {
      quizzes.splice(index, 1);
      isDeleted = true;
    } else {
      isDeleted = false;
    }
  }
  return isDeleted;
}
// update question

module.exports = {
  createQuize,
  getAllQuizzes,
  removeQuizeById
};