// Preguntas del blog con localStorage (básico)
// - Añade artículo con fecha
// - Botón para borrar
// - Usa const/let

const STORAGE_KEY = "blogQuestionsV1";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".blog-form");
    const input = document.getElementById("blog-question");
    let list = document.getElementById("questions-list");

    if (!form || !input) return;


    if (!list) {
        list = document.createElement("div");
        list.id = "questions-list";
        form.parentNode.appendChild(list);
    }

    renderQuestions(list);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const text = input.value.trim();
        if (text === "") return;

        const questions = loadQuestions();

        const item = {
            id: String(Date.now()),   // id simple
            text: text,
            createdAt: Date.now()
        };

        questions.push(item);
        saveQuestions(questions);

        addQuestionArticle(list, item);
        input.value = "";
    });

    // Delegación de eventos: un listener para todos los botones borrar
    list.addEventListener("click", (e) => {
        const target = e.target;
        if (!target) return;

        if (target.matches("[data-action='delete']")) {
            const id = target.getAttribute("data-id");
            deleteQuestion(id);
            renderQuestions(list);
        }
    });
});

function loadQuestions() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    try {
        return JSON.parse(raw);
    } catch (e) {
        return [];
    }
}

function saveQuestions(arr) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function deleteQuestion(id) {
    const questions = loadQuestions();
    const filtered = [];

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id !== id) filtered.push(questions[i]);
    }

    saveQuestions(filtered);
}

function renderQuestions(list) {
    const questions = loadQuestions();

    list.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
        addQuestionArticle(list, questions[i]);
    }
}

function formatDate(ts) {
    const d = new Date(ts);

    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");

    return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}

function addQuestionArticle(list, item) {
    const article = document.createElement("article");
    article.className = "blog-article";

    const title = document.createElement("h4");
    title.className = "blog-article__title";
    title.textContent = "Pregunta";

    const dateP = document.createElement("p");
    dateP.className = "blog-article__desc";
    dateP.textContent = `Fecha: ${formatDate(item.createdAt)}`;

    const textP = document.createElement("p");
    textP.className = "blog-article__desc";
    textP.textContent = item.text;

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "blog-form__button"; // reusa el estilo existente
    delBtn.textContent = "Borrar";
    delBtn.setAttribute("data-action", "delete");
    delBtn.setAttribute("data-id", item.id);

    article.appendChild(title);
    article.appendChild(dateP);
    article.appendChild(textP);
    article.appendChild(delBtn);

    list.appendChild(article);
}