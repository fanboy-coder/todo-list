import { todo } from "./item";
import { display } from "./display";

const list = [];

function addTodo() {
    const submit = document.querySelector("#submit");
    submit.addEventListener("click", () => {
        let title = document.getElementById("new-title").value;
        let description = document.getElementById("new-description").value;
        let dueDate = document.getElementById("start").value;
        let priority = document.querySelector("input[name=priority]:checked").value;
        const newTodo = todo (title, description, dueDate, priority);
        list.push(newTodo);
        console.log(list);
    })
    display();
}

export { list, addTodo }