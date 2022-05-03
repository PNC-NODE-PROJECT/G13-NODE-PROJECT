// llist all quiz

import { listQuiz,checkQuiz } from '../utils/domutils.js';
// get dat and this play 
function displayQuiz() {
  let URL = "http://localhost:80/api/quiz";
  axios.get(URL)
    .then((response) => {
      let quizzes = response.data;
      console.log(quizzes);
      listQuiz(quizzes);
    })
}
// create new quiz instance

function createQuiz() {
  let newQuiz =checkQuiz();
  if(newQuiz!==false) {
    axios.post("http://localhost:80/api/quiz",newQuiz);

  }

}

/**
   * 
   * @param {*} e
   * @returns : eventerlistener  
   */
function checked(e) {
  e.preventDefault();
  console.log("checked");
  let btnUpdate = document.querySelector('.btnUpdate');
  if(e.target.className==="btn-delete btn btn-danger"){
    deleteQuiz(e.target.dataset);
    console.log("delete");
  }else if (e.target.className==="fa fa-trash-o"){
    deleteQuiz(e.target.parentElement.dataset);
  }
  else if (e.target.className==="fa fa-edit"){

    btnUpdate.dataset.id =e.target.parentElement.dataset.id;
    
    getQuizById(e.target.parentElement.dataset);
  }else{
    console.log("not found");
  }
}

/**
 * @param {*} remove quize
 */

function deleteQuiz(id) {
  let quizId = id.id;
  axios.delete("http://localhost:80/api/quiz/"+quizId);
 }
 
// call back function
displayQuiz();
let btnSubmit  = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",createQuiz);
// let contentQuiz = document.getElementById('container');


document.getElementById('container').addEventListener('click',checked);


