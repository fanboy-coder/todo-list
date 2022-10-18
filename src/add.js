import { todo, createProject } from "./item";
import { display, projects, closemodal, projectPage } from "./display";

const list = [];
const projectList = [];

// add a new todo to the list
function addTodo(title, description, dueDate, priority, project) {
    const newTodo = todo(title, description, dueDate, priority, project);
    list.push(newTodo);
    clear();
    display(list);
}

// add a new project to the projects list
function addProject(projectname) {
    const newProject = createProject(projectname);
    projectList.push(newProject);
    clearProjects();
    projects();
}

// clear all todos
function clear() {
    const todos = document.querySelectorAll(".todo");
    todos.forEach(todo => {
        todo.remove();
    })
}

// clear all projects
function clearProjects() {
    const projects = document.querySelectorAll(".project-box");
    projects.forEach(project => {
        project.remove();
    })
}

// remove 1 todo from the list
function removeTodo(remove) {
    list.splice(remove, 1);
    clear();
    display(list);
}

// remove 1 project from the projects list
function removeProject(remove) {
    projectList.splice(remove, 1);
    projects();
}

// remove all todos with a determined value from the list
function removeFromList(title) {
    for (let i = list.length - 1; i >= 0; i--) {
        if (list[i].project === title) {
            list.splice(i, 1);
        }
    }
}

// create a new todo
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

// replace a project's name and updates the value in all todos from that project
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
    display(list);
}

function replaceDate() {
    clear();
    display(list);
}

function replaceProject(replaced, replacement) {

    const objIndex = projectList.findIndex((obj => obj.newProject === replaced));
    projectList[objIndex].newProject = replacement;

    for (let i = 0; i < list.length; i++) {
        if (list[i].project === replaced) {
            list[i].project = replacement;
        }
    }

    let input = document.querySelector(".replace-project-name");
    let title = document.createElement("h2");
    title.setAttribute("class", "project-headline");
    title.setAttribute("id", "project-title");
    title.textContent = replacement;
    input.replaceWith(title);

    let page = replacement;

    projectPage(page);
    projects();
}

export { list, projectList, removeFromList, addTodo, replaceDate, addProject, removeProject, clearProjects, replaceProject, submit, removeTodo, replace, clear }