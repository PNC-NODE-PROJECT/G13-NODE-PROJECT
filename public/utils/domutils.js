

let CONTAINER = document.getElementById("container");
export function refreshDOM(quizes) {
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.lastChild);
    }
    quizes.forEach(quiz => {
        let container = document.createElement('div');
        container.className = "container mt-5";

        let card = document.createElement('div');
        card.className = "card bg-white";
        card.id = quiz.id;

        let cardHeader = document.createElement("div");
        cardHeader.className = "card-header d-flex justify-content-end";
        cardHeader.style.backgroundColor = "#C18FF4"

        let btnDelete = document.createElement("div");
        btnDelete.className = "btn delete";
        btnDelete.dataset.delete ="delete";
        btnDelete.textContent = "Delete";

        let btnEdit = document.createElement("div");
        btnEdit.className = "btn Edit";
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
    element.style.display = 'none';
}
export function show(element) {
    element.style.display = 'block';
}
export function playQuiz(){
    
}