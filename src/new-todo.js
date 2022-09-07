import { todo } from "./item";

function addTodo() {
    const list = [];
    const submit = document.querySelector("#submit");
    submit.addEventListener("click", () => {
        let title = document.getElementById("new-title").value;
        let description = document.getElementById("new-description").value;
        let dueDate = document.getElementById("start").value;
        let priority = document.querySelector("input[name=priority]:checked").value;
        const newTodo = todo (title, description, dueDate, priority);
        return newTodo;
    })
    list.push(newTodo);
    console.log(list);
}

export { addTodo }