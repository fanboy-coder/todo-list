import { addTodo } from "./new-todo";

function display () {
    for (let i = 0; i< addTodo.list.length; i++) {
        const container = document.getElementById("display");
        const div = container.appendChild(document.createElement("div"));
        for (let elem in addTodo.list[i]) {
            const p = div.appendChild(document.createElement("p"));
            p.innerText = addTodo.list[i][elem];
        }
    }
}

export { display }