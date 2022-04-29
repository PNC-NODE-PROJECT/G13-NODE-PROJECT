

import { refreshDOM, show, hide,formCreateQuiz ,createQuiz} from "../utils/domutils.js";
// function
function displayQuiz() {
    let URL = "http://192.168.24.19/api/quize";
    axios.get(URL)
        .then((response) => {
            let quizes = response.data;
            refreshDOM(quizes);
        })

}
displayQuiz();