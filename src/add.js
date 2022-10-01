import { todo, createProject } from "./item";
import { display, projects, closemodal } from "./display";

const list = [];
const projectList = [];

function addTodo(title, description, dueDate, priority,project) {
    const newTodo = todo(title, description, dueDate, priority, project);
    list.push(newTodo);
    clear();
    display();
}

function addProject (projectname) {
    const newProject = createProject(projectname);
    projectList.push(newProject);
    clearProjects();
    projects();
}

function clear() {
    const todos = document.querySelectorAll(".todo");
    todos.forEach(todo => {
        todo.remove();
    })
}

function clearProjects() {
    const projects = document.querySelectorAll(".project-box");
    projects.forEach(project => {
        project.remove();
    })
}

function removeTodo(remove) {
    list.splice(remove, 1);
    clear();
    display();
}

function removeProject(remove) {
    projectList.splice(remove,1);
    clearProjects();
}

function submit() {
    const projectName = document.getElementById("project-title");
    let project = projectName.innerText;
    let title = document.getElementById("new-title").value;
    let description = document.getElementById("new-description").value;
    let dueDate = document.getElementById("start").value;
    let select = document.getElementById("priority-group");
    let priority = select.options[select.selectedIndex].value;
    if (title != undefined) {
        addTodo(title, description, dueDate, priority, project);
    }
    closemodal();
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

export { list, projectList, addTodo, addProject, removeProject, clearProjects, submit, removeTodo, replace, clear }