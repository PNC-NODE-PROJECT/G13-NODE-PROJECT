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
  axios.post("http://localhost:80/api/quiz",newQuiz);

}

/**
   * 
   * @param {*} e
   * @returns : eventerlistener  
   */
 function checked(e) {
  e.preventDefault();
  let id = "";
  let btnUpdate = document.querySelector('.btnUpdate');
  if(e.target.className==="btn-delete btn btn-danger"){
    deleteQuiz(e.target.dataset);
    console.log("delete");
  }else if (e.target.className==="fa fa-trash-o"){
    deleteQuiz(e.target.parentElement.dataset);
  }
  else if (e.target.className==="fa fa-edit"){
    id =  e.target.parentElement.dataset.id;
    btnUpdate.dataset.id = id;
    
    getQuizById(e.target.parentElement.dataset);
  }
}


//call back function
displayQuiz();
let btnSubmit  = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",createQuiz);
let contentQuiz = document.querySelector(".content-quiz");
contentQuiz.addEventListener('click',checked);


