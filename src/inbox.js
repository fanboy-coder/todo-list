import { modal } from "./display"

function inbox () {
    const main = document.getElementById("main");
    const headline = main.appendChild(document.createElement("div"));
    headline.setAttribute("id","headline-box");
    const title = headline.appendChild(document.createElement("h2"));
    title.textContent = "Inbox";
    title.setAttribute("id", "project-title");
    const newTodo = main.appendChild(document.createElement("div"));
    newTodo.setAttribute("id","new-todo");
    const icon = newTodo.appendChild(document.createElement("img"));
    icon.src = "../src/images/plus-box.svg";
    icon.setAttribute("class", "icon");
    const p = newTodo.appendChild(document.createElement("p"));
    p.innerText = "Add Task";
    newTodo.addEventListener("click", () => {
        modal();
    });
    const display = main.appendChild(document.createElement("div"));
    display.setAttribute("id","display");
}

export { inbox }