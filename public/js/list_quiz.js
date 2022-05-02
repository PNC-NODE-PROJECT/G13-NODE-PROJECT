// llist all quiz

  import {listQuiz} from '../utils/domutils.js';
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

//call back function
displayQuiz();

