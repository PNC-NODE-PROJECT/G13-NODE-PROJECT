

import {refreshDOM,hide,show} from '../utils/domutils.js';

// function
function displayQuiz() {
    let URL = "http://localhost:80/api/quize";
    axios.get(URL)
        .then((response) => {
            let quizes = response.data;
            refreshDOM(quizes);
        })

}
displayQuiz();