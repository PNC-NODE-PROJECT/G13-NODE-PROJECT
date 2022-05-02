
// display all quizzes
export function listQuiz(quizzes) {
  let contentQuiz = document.querySelector(".content-quiz");
  if (quizzes.length > 0) {

    contentQuiz.remove();
    // contain quiz
    let content = document.createElement("div");
    content.className = ".content-quiz w-50 m-auto mt-5";

    quizzes.forEach(quiz => {
      let card = document.createElement("div");
      card.className = "card mt-3";


      let cardHeader = document.createElement("div");
      cardHeader.className = "card-header d-flex justify-content-between";

      let title = document.createElement('h2');
      title.className = "card-title";
      title.textContent = quiz.title;

      let score = document.createElement('h3');
      score.className = "card-text";
      score.textContent = quiz.score + "pt";

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";


      let question = document.createElement("h5");
      question.className = "card-title";
      question.textContent = quiz.question;

      cardBody.appendChild(question);

      let choices = quiz.choices;

      for (let choice of choices) {
        console.log(choice);
        let choiceDom = document.createElement("p");
        if (choice === quiz.correct) {
          choiceDom.className = "card-text text-success";

        } else {
          choiceDom.className = "card-text";

        }
        choiceDom.textContent = choice;
        cardBody.appendChild(choiceDom);

      }
      let cardFooter = document.createElement("div");
      cardFooter.className = "card-footer  d-flex justify-content-end";

      let btnDelete = document.createElement("button");
      btnDelete.className = "btn-delete btn btn-danger";
      btnDelete.dataset.id = quiz.id;

      let iconTrash = document.createElement("i");
      iconTrash.className = "fa fa-trash-o";

      let btnEdit = document.createElement("button");
      btnEdit.className = "btn-edit btn btn-primary ml-1";
      btnEdit.dataset.id = quiz.id;
      btnEdit.dataset.toggle = "modal";
      btnEdit.dataset.target = "#myModalUpdate";
      let iconEdit = document.createElement("i");
      iconEdit.className = "fa fa-edit";

      cardHeader.appendChild(title);
      cardHeader.appendChild(score);

      btnDelete.appendChild(iconTrash);
      cardFooter.appendChild(btnDelete);

      btnEdit.appendChild(iconEdit);
      cardFooter.appendChild(btnEdit);

      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);

      content.appendChild(card);

    })
    document.body.appendChild(content);
  } else {
    let imgDom = document.createElement("img");
    imgDom.setAttribute("src", "../image/empty.png");
    imgDom.className = "img-responsive";
    imgDom.style.width = "70%";
    contentQuiz.appendChild(imgDom);

  }
}
export function hide(element) {
  element.style.display = "none";
}
export function show(element) {
  element.style.display = 'block';
}
export function playQuiz() {

}
