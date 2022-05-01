

import {refreshDOM,hide,show,formCreateQuiz} from '../utils/domutils.js';

// function
function displayQuiz() {
    let URL = "http://localhost:80/api/quize";
    axios.get(URL)
        .then((response) => {
            let quizes = response.data;
            console.log(quizes);
            refreshDOM(quizes);
        })

}
displayQuiz();
formCreateQuiz();