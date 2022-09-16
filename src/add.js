import { todo } from "./item";
import { display } from "./display";

const list = [];

function addTodo(title, description, dueDate, priority) {
    const newTodo = todo(title, description, dueDate, priority);
    list.push(newTodo);
    clear();
    display();
}

function clear() {
    const todos = document.querySelectorAll(".todo");
    todos.forEach(todo => {
        todo.remove();
    })
}

function removeTodo(remove) {
    list.splice(remove, 1);
    clear();
    display();
}

function submit() {
    const submit = document.querySelector("#submit");
    submit.addEventListener("click", function (e) {
        let title = document.getElementById("new-title").value;
        let description = document.getElementById("new-description").value;
        let dueDate = document.getElementById("start").value;
        let select = document.getElementById("priority-group");
        let priority = select.options[select.selectedIndex].value;
        addTodo(title, description, dueDate, priority);
        e.preventDefault();
    });
}

function replace(replaced, replacement) {

    for (let i = 0; i < list.length; i++) {

        function getObjKey(list, replaced) {
            return Object.keys(list[i]).find(key => list[i][key] === replaced);
        }

        let value = getObjKey(list, replaced);

        if (value === "title") {
            const index = list.findIndex(object => {
                return object.title === replaced;
            })
            if (index !== -1) {
                list[index].title = replacement;
            }
        }

        if (value === "description") {
            const index = list.findIndex(object => {
                return object.description === replaced;
            })
            if (index !== -1) {
                list[index].description = replacement;
            }
        }
    }

    clear();
    display();
}

export { list, addTodo, submit, removeTodo, replace }