let CONTAINER = document.getElementById("container");

// display all quizzes
export function refreshDOM(quizes) {
  quizes.forEach((quiz) => {
    let container = document.createElement("div");
    container.className = "container mt-5";

    let card = document.createElement("div");
    card.className = "card bg-white w-50 m-auto";

    let cardHeader = document.createElement("div");
    cardHeader.className = "card-header d-flex justify-content-end";
    cardHeader.style.backgroundColor = "#C18FF4";

    let btnDelete = document.createElement("div");
    btnDelete.className = "btn";
    btnDelete.textContent = "Delete";

    let btnEdit = document.createElement("div");
    btnEdit.className = "btn";
    btnEdit.textContent = "Edit";

    cardHeader.appendChild(btnDelete);
    cardHeader.appendChild(btnEdit);
    /**
     * card body
     */
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let h2 = document.createElement("h2");
    h2.className = "card-title";
    h2.textContent = quiz.title;

    let hr = document.createElement("hr");

    let h6 = document.createElement("h6");
    h6.className = "card-subtitle mb-2 text-muted";
    h6.textContent = quiz.question;
    let pa = document.createElement("p");
    pa.textContent = quiz.choose.A;
    let p2 = document.createElement("p");
    p2.textContent = quiz.choose.B;
    let p3 = document.createElement("p");
    p3.textContent = quiz.choose.C;
    let p4 = document.createElement("p");
    p4.textContent = quiz.choose.D;

    cardBody.appendChild(h2);
    cardBody.appendChild(hr);
    cardBody.appendChild(h6);
    cardBody.appendChild(pa);
    cardBody.appendChild(p2);
    cardBody.appendChild(p3);
    cardBody.appendChild(p4);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    container.appendChild(card);

    CONTAINER.appendChild(container);
  });
}
export function hide(element) {
  element.style.display = "none";
}
export function show(element) {
  element.style.display = "block";
}

function formDom() {
let containerDom= document.querySelector('#container');

  let contentForm = document.createElement("div");
  contentForm.className = "contentForm";
  let form = document.createElement("form");
  form.className = "form col-6 p-4 m-auto";
  contentForm.appendChild(form);
  containerDom.appendChild(contentForm);

}
function titleDom() {
  let parentTitle = document.createElement("div");
  parentTitle.className = "form-group";

  let inputTitle = document.createElement("input");
  inputTitle.className = "form-control title";
  inputTitle.type = "text";
  inputTitle.setAttribute("placeholder", "title");
  parentTitle.appendChild(inputTitle);
  let formDom = document.querySelector('.form');
  formDom.appendChild(parentTitle);


}
function questionDom() {
    let parentQuestion = document.createElement("div");
    parentQuestion.className = "form-group d-flex justify-content-between";
  
    let inputQuestion = document.createElement("input");
    inputQuestion.className = "form-control col-9 question";
    inputQuestion.type = "text";
    inputQuestion.setAttribute("placeholder", "question");

    parentQuestion.appendChild(inputQuestion);
    let form = document.querySelector('.form');
    form.appendChild(inputQuestion);

  
}
function choiceDom(){
    let form = document.querySelector('.form');
    for (let i = 0; i < 4; i++) {
        let inputGroup= document.createElement("div");
        inputGroup.className = "mt-3 d-flex justify-content-between align-center";
        let inputRadio = document.createElement("input");
        inputRadio.type = "radio";
        inputRadio.name = "choice"+i;
        
        let inputAnswer = document.createElement("input");
        inputAnswer.className = "form-control answer";
        inputAnswer.type = "text";
        inputAnswer.setAttribute("placeholder", "answer");
        
        inputGroup.appendChild(inputRadio);
        inputGroup.appendChild(inputAnswer);
        
        form.appendChild(inputGroup);
      }

}
function assighScore(){
    let inputScore = document.createElement("input");
    inputScore.className = "col-2 score";
    inputScore.type = "number";
    inputScore.setAttribute("placeholder", "score");
    let form = document.querySelector('.form');
    form.appendChild(inputScore);

}
export function formCreateQuiz() {
    formDom();
    titleDom();
    questionDom() 
    choiceDom();

}

export function addQuiz() {
  let titleDom = document.querySelector(".title");
  let questionDom = document.querySelector(".question");
  let choiceDom = document.querySelectorAll(".answer");
  let score_dom = document.querySelector(".score");
  let radios_dom = document.querySelectorAll("input[type='radio']");
  let title_value = titleDom.value;

  let question_value = questionDom.value;
  let correct = "";
  radios_dom.forEach((radio) => {
    if (radio.checked) {
      // correct=radio.checked;
      console.log(radio);
    }
  });
  let choices = [];
  let choices_obj = {};
  console.log(choiceDom);
  choiceDom.forEach((choice) => {
    choices.push(choice.value);
  });
  let isChoiceIsValid =
    choices[0] !== "" &&
    choices[1] !== "" &&
    choices[2] !== "" &&
    choices[3] !== "";
  if (isChoiceIsValid) {
    choices_obj = {
      A: choices[0],
      B: choices[1],
      C: choices[2],
      "D:": choices[3],
    };
  } else {
    console.log("not found");
  }
  console.log(isChoiceIsValid);
  console.log(choices_obj);
  console.log(correct);
}
