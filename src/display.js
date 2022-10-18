import { list, removeFromList, removeTodo, replace, replaceDate, clear, submit, addProject, removeProject, clearProjects, replaceProject, projectList } from "./add.js";

// creates the inbox page
function inbox() {
    const main = document.getElementById("main");
    const headline = main.appendChild(document.createElement("div"));
    headline.setAttribute("id", "headline-box");
    const title = headline.appendChild(document.createElement("h2"));
    title.textContent = "Inbox";
    title.setAttribute("id", "project-title");
    const del = headline.appendChild(document.createElement("img"));
    del.src = "../src/images/close-circle.svg"
    del.setAttribute("class", "icon");
    del.style.visibility = "hidden";
    del.setAttribute("id", "delete-project");
    del.addEventListener("click", () => {
        deleteProjectModal();
    })
    todoButton();
    const display = main.appendChild(document.createElement("div"));
    display.setAttribute("id", "display");
}

// creates the sidebar
function sidebar() {
    const container = document.querySelector(".sidebar");
    const menu = container.appendChild(document.createElement("div"));
    menu.setAttribute("id", "menu");

    // inbox
    const inbox = menu.appendChild(document.createElement("div"));
    inbox.setAttribute("id", "inbox");
    const icon1 = inbox.appendChild(document.createElement("img"));
    icon1.src = "../src/images/inbox.svg";
    icon1.setAttribute("class", "icon");
    const p1 = inbox.appendChild(document.createElement("p"));
    p1.innerText = "Inbox";
    inbox.addEventListener("click", () => {
        clear();
        const main = document.getElementById("project-title");
        main.textContent = "Inbox";
        const del = document.getElementById("delete-project");
        del.style.visibility = "hidden";
        todoButton();
        for (let i = 0; i < list.length; i++) {
                list[i].project = "Inbox";
            }
        display(list);
    });

    //today
    const today = menu.appendChild(document.createElement("div"));
    today.setAttribute("id", "today");
    const icon2 = today.appendChild(document.createElement("img"));
    icon2.src = "../src/images/calendar-today.svg";
    icon2.setAttribute("class", "icon");
    const p2 = today.appendChild(document.createElement("p"));
    p2.innerText = "Today";
    today.addEventListener("click", () => {
        clear();
        const main = document.getElementById("project-title");
        main.textContent = "Due today";
        const del = document.getElementById("delete-project");
        if (del) {
            del.style.visibility = "hidden";
        }
        todoButton();
        const date = document.getElementById("today");
        filterbyDate(date.id);
    });

    //week
    const week = menu.appendChild(document.createElement("div"));
    week.setAttribute("id", "week");
    const icon3 = week.appendChild(document.createElement("img"));
    icon3.src = "../src/images/calendar-week.svg";
    icon3.setAttribute("class", "icon");
    const p3 = week.appendChild(document.createElement("p"));
    p3.innerText = "This Week";
    week.addEventListener("click", () => {
        clear();
        const main = document.getElementById("project-title");
        main.textContent = "Due this week";
        const del = document.getElementById("delete-project");
        if (del) {
            del.style.visibility = "hidden";
        }
        todoButton();
        let date = document.getElementById("week");
        filterbyDate(date.id);
    });

    //projects
    const projects = container.appendChild(document.createElement("div"));
    projects.setAttribute("id", "projects");
    const title = projects.appendChild(document.createElement("h2"));
    title.textContent = "Projects";
    title.setAttribute("class", "headline");
    const projectList = projects.appendChild(document.createElement("div"));
    projectList.setAttribute("id", "projects-list");

    // field to create a new project
    const newProject = projects.appendChild(document.createElement("div"));
    newProject.setAttribute("id", "new-project");
    const icon4 = newProject.appendChild(document.createElement("img"));
    icon4.src = "../src/images/plus-box.svg";
    icon4.setAttribute("class", "icon");
    const p4 = newProject.appendChild(document.createElement("p"));
    p4.innerText = "Add Project";
    newProject.addEventListener("click", () => {
        const newProject = document.querySelector("#add-project");
        if (!newProject) {
            const input = projects.appendChild(document.createElement("input"));
            input.setAttribute("id", "add-project");
            document.querySelector("#add-project").select();
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    if (input.value != "") {
                        addProject(input.value);
                        input.remove();
                        buttons.remove();
                    }
                }
                if (e.key === "Escape") {
                    input.remove();
                    buttons.remove();
                }
            })
            // add a project and cancel buttons
            const buttons = projects.appendChild(document.createElement("div"));
            buttons.setAttribute("class", "buttons");

            const add = buttons.appendChild(document.createElement("button"));
            add.setAttribute("class", "button");
            add.setAttribute("id", "add");
            add.innerText = "Add";
            add.addEventListener("click", () => {
                if (input.value != "") {
                    addProject(input.value);
                    input.remove();
                    buttons.remove();
                }
            })
            const cancel = buttons.appendChild(document.createElement("button"));
            cancel.setAttribute("class", "button");
            cancel.setAttribute("id", "cancel");
            cancel.innerText = "Cancel";
            cancel.addEventListener("click", () => {
                input.remove();
                buttons.remove();
            })
        }
    });
}

function filterbyDate(date) {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

    let todayArr = [];
    let weekArr = [];
    let allWeek = [];

    let weekDays = Array.from(Array(7).keys()).map((idx) => { const d = new Date(); d.setDate(d.getDate() - d.getDay() + idx); return d; });

    for (let a = 0; a < weekDays.length; a++) {
        allWeek.push(weekDays[a].toJSON().slice(0, 10).replace(/-/g, '-'));
    }

    if (date === "today") {
        for (let i = 0; i < list.length; i++) {
            if (list[i].dueDate === utc) {
                list[i].project = "Due " + date;
                todayArr.push(list[i]);
            }
        }
        display(todayArr);
    }
    if (date === "week") {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < allWeek.length; j++) {
                if (list[i].dueDate === allWeek[j]) {
                    list[i].project = "Due this " + date;
                    weekArr.push(list[i]);
                }
            }
        }
        display(weekArr);
    }
}

// creates the projects sidebar and pages
function projects() {
    clearProjects();
    for (let i = 0; i < projectList.length; i++) {

        // append a new project to the sidebar
        const container = document.getElementById("projects-list");
        const projectBox = container.appendChild(document.createElement("div"));
        projectBox.setAttribute("class", "project-box");
        projectBox.setAttribute("id", [i]);
        const project = projectBox.appendChild(document.createElement("p"));
        project.setAttribute("class", "project-name");
        project.setAttribute("id", [i]);

        // creates a new project page
        for (let elem in projectList[i]) {
            project.innerText = projectList[i][elem];
            let page = projectList[i][elem];
            project.addEventListener("click", () => {
                projectPage(page);
            })

        }
    }
}

// displays the todos in the page
function display(arr) {
    const checkProject = document.getElementById("project-title");

    for (let i = 0; i < arr.length; i++) {

        if (checkProject.innerText === arr[i].project) {
            const container = document.getElementById("display");
            const div = container.appendChild(document.createElement("div"));
            div.setAttribute("class", "todo");

            const deleteColumn = div.appendChild(document.createElement("div"));
            deleteColumn.setAttribute("class", "delete-column");
            const btn = deleteColumn.appendChild(document.createElement("button"));
            btn.setAttribute("id", [i]);
            btn.setAttribute("class", "delete-button");
            btn.addEventListener("click", () => {
                let remove = btn.id;
                removeTodo(remove);
            })

            const topRow = div.appendChild(document.createElement("div"));
            topRow.setAttribute("class", "top-row");

            const bottomRow = div.appendChild(document.createElement("div"));
            bottomRow.setAttribute("class", "bottom-row");

            const priorityColumn = div.appendChild(document.createElement("div"));
            priorityColumn.setAttribute("class", "priority-column");

            for (let elem in arr[i]) {
                if (elem === "title") {
                    const p = topRow.appendChild(document.createElement("p"));
                    p.setAttribute("id", [elem]);
                    p.innerText = arr[i][elem];
                }
                if (elem === "dueDate") {
                    const p = topRow.appendChild(document.createElement("p"));
                    p.setAttribute("id", [elem]);
                    p.innerText = "Due in: " + arr[i][elem];
                }
                if (elem === "priority") {
                    const div = priorityColumn.appendChild(document.createElement("div"));
                    div.setAttribute("id", "priority-indicator");
                    if (arr[i][elem] === "low") {
                        div.style.background = "green";
                        div.setAttribute("class", "low");
                    }
                    if (arr[i][elem] === "medium") {
                        div.style.background = "yellow";
                        div.setAttribute("class", "medium");
                    }
                    if (arr[i][elem] === "high") {
                        div.style.background = "red";
                        div.setAttribute("class", "high");
                    }
                }
                if (elem === "description") {
                    const div = bottomRow.appendChild(document.createElement("div"));
                    div.setAttribute("id", "description");
                    if (arr[i][elem] === undefined) {
                        const emptyDescription = div.appendChild(document.createElement("p"));
                        emptyDescription.setAttribute("class", "empty");
                        emptyDescription.innerText = "Add a description";
                    }
                    else {
                        div.innerText = arr[i][elem];
                    }
                }
            }

            const titles = document.querySelectorAll("#title");
            titles.forEach(title => {
                title.addEventListener("click", () => {
                    const input = document.createElement("input");
                    input.setAttribute("class", "replace-title");
                    title.replaceWith(input);
                    document.querySelector(".replace-title").select();
                    input.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            let replaced = arr[i].title;
                            let replacement = document.querySelector(".replace-title").value;
                            if (replacement != "") {
                                replace(replaced, replacement);
                            }
                            else {
                                let replacement = arr[i].title;
                                replace(replaced, replacement);
                            }
                        }
                        if (e.key === "Escape") {
                            let replaced = arr[i].title;
                            let replacement = arr[i].title;
                            replace(replaced, replacement);
                        }
                    });
                });
            })

            const descriptions = document.querySelectorAll("#description");
            descriptions.forEach(description => {
                description.addEventListener("click", () => {
                    const input = document.createElement("input");
                    input.setAttribute("class", "replace-description");
                    description.replaceWith(input);
                    document.querySelector(".replace-description").select();
                    input.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            let replaced = arr[i].description;
                            let replacement = document.querySelector(".replace-description").value;
                            if (replacement != "") {
                                replace(replaced, replacement);
                            }
                            else {
                                let replacement = arr[i].description;
                                replace(replaced, replacement);
                            }
                        }
                        if (e.key === "Escape") {
                            let replaced = arr[i].description;
                            let replacement = arr[i].description;
                            replace(replaced, replacement);
                        }
                    });
                });
            })

            const dates = document.querySelectorAll("#dueDate");
            dates.forEach(date => {
                date.addEventListener("click", () => {
                    const emptyDate = document.createElement("input");
                    emptyDate.setAttribute("type", "date");
                    emptyDate.setAttribute("id", "start");
                    emptyDate.setAttribute("min", "2018-01-01");
                    date.replaceWith(emptyDate);
                    emptyDate.addEventListener("change", () => {
                        arr[i].dueDate = document.getElementById("start").value;
                        replaceDate();
                    })
                })
            })

            // const priorities = document.querySelectorAll("#priority-indicator");
            // priorities.forEach(priority => {
            //     priority.addEventListener("click", () => {
            //         const input = document.createElement("select");
            //         input.setAttribute("id", "select")
            //         input.setAttribute("class", "priority-group");
            //         let low = input.appendChild(document.createElement("option"));
            //         low.value = low;
            //         low.textContent = "Low";
            //         let medium = input.appendChild(document.createElement("option"));
            //         medium.value = medium;
            //         medium.textContent = "Medium";
            //         let high = input.appendChild(document.createElement("option"));
            //         high.value = high;
            //         high.textContent = "High";
            //         let replaced = priority.className;
            //         priority.replaceWith(input);
            //         const select = document.getElementById("select");
            //         select.addEventListener('change', function handleChange(event) {
            //             let replacement = select.options[select.selectedIndex].text;
            //             replace(replaced, replacement);
            //         });
            //     })
            // })
        }
    }
}

function projectPage(page) {
    clearPage();
    const main = document.getElementById("main");
    const headline = main.appendChild(document.createElement("div"));
    headline.setAttribute("id", "headline-box");
    const title = headline.appendChild(document.createElement("h2"));
    title.setAttribute("id", "project-title");
    title.textContent = page;
    title.addEventListener("click", () => {
        const input = document.createElement("input");
        input.setAttribute("class", "replace-project-name");
        title.replaceWith(input);
        document.querySelector(".replace-project-name").select();
        let replaced = title.textContent;
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                let replacement = document.querySelector(".replace-project-name").value;
                if (replacement != "") {
                    replaceProject(replaced, replacement);
                }
                else {
                    let replacement = title.textContent;
                    replaceProject(replaced, replacement);
                }
            }
            if (e.key === "Escape") {
                let replaced = title.textContent;
                let replacement = title.textContent;
                replaceProject(replaced, replacement);
            }
        });
    })
    const del = headline.appendChild(document.createElement("img"));
    del.src = "../src/images/close-circle.svg"
    del.setAttribute("class", "icon");
    del.setAttribute("id", "delete-project");
    del.addEventListener("click", () => {
        deleteProjectModal();
    })
    todoButton();
    const displayarea = main.appendChild(document.createElement("div"));
    displayarea.setAttribute("id", "display");
    display(list);
}

//opens a new todo modal
function modal() {
    const body = document.body;
    const div = document.createElement("div");
    div.setAttribute("id", "modal-bg-display");
    const modal = div.appendChild(document.createElement("div"));
    modal.setAttribute("id", "modal");

    const main = modal.appendChild(document.createElement("div"));
    main.setAttribute("id", "modal-main");

    const emptyTitle = main.appendChild(document.createElement("p"));
    emptyTitle.setAttribute("class", "empty");
    emptyTitle.setAttribute("id", "new-title");
    emptyTitle.innerText = "Add a new task";
    emptyTitle.addEventListener("click", () => {
        const title = main.appendChild(document.createElement("input"));
        title.setAttribute("id", "new-title");
        title.setAttribute("type", "text");
        emptyTitle.replaceWith(title);
        document.querySelector("#new-title").select();
    })

    const emptyDescription = main.appendChild(document.createElement("p"));
    emptyDescription.setAttribute("class", "empty");
    emptyDescription.setAttribute("id", "new-description");
    emptyDescription.innerText = "Add a description";
    emptyDescription.addEventListener("click", () => {
        const description = main.appendChild(document.createElement("input"));
        description.setAttribute("id", "new-description");
        description.setAttribute("type", "text");
        emptyDescription.replaceWith(description);
        document.querySelector("#new-description").select();
    })

    const emptyDate = main.appendChild(document.createElement("input"));
    emptyDate.setAttribute("type", "date");
    emptyDate.setAttribute("id", "start");
    emptyDate.setAttribute("min", "2018-01-01");
    emptyDate.setAttribute

    const emptyPriority = main.appendChild(document.createElement("select"));
    emptyPriority.setAttribute("name", "priority")
    emptyPriority.setAttribute("id", "priority-group");
    let low = emptyPriority.appendChild(document.createElement("option"));
    low.setAttribute("value", "low");
    low.textContent = "Low";
    let medium = emptyPriority.appendChild(document.createElement("option"));
    medium.setAttribute("value", "medium");
    medium.textContent = "Medium";
    let high = emptyPriority.appendChild(document.createElement("option"));
    high.setAttribute("value", "high");
    high.textContent = "High";

    const add = main.appendChild(document.createElement("button"));
    add.setAttribute("type", "submit");
    add.setAttribute("id", "submit");
    add.textContent = "Submit";
    add.addEventListener("click", (e) => {
        submit();
        e.preventDefault();
    })

    const close = modal.appendChild(document.createElement("div"));
    close.setAttribute("id", "modal-close");
    const closebtn = close.appendChild(document.createElement("img"));
    closebtn.src = "../src/images/close-circle.svg"
    closebtn.setAttribute("class", "icon");
    closebtn.addEventListener("click", () => {
        closemodal();
    })

    body.appendChild(div);

    document.getElementById("modal-bg-display").onclick = function (e) {
        if (e.target === document.getElementById("modal-bg-display")) {
            closemodal();
        }
    }
}

// opens a delete project modal
function deleteProjectModal() {
    const body = document.body;
    const div = document.createElement("div");
    div.setAttribute("id", "modal-bg-display");

    const main = div.appendChild(document.createElement("div"));
    main.setAttribute("id", "delete-modal");
    const warning = main.appendChild(document.createElement("div"));
    warning.setAttribute("id", "warning-box");
    const h2 = warning.appendChild(document.createElement("h2"));
    h2.innerText = "Are you sure you want to delete this project?"

    const buttons = main.appendChild(document.createElement("div"));
    buttons.setAttribute("id", "delete-project-buttons");
    const yes = buttons.appendChild(document.createElement("button"));
    yes.setAttribute("class", "button");
    yes.setAttribute("id", "yes");
    yes.innerText = "Yes";
    yes.addEventListener("click", () => {
        const get = document.getElementById("project-title");
        const title = get.innerText;
        const remove = projectList.map(object => object.newProject).indexOf(title);
        removeProject(remove);
        removeFromList(title);
        closemodal();
        clearPage();
        inbox();
        display(list);
    })
    const no = buttons.appendChild(document.createElement("button"));
    no.setAttribute("class", "button");
    no.setAttribute("id", "no");
    no.innerText = "No";
    no.addEventListener("click", () => {
        main.remove();
        div.remove();
    })

    body.appendChild(div);
}

// closes a modal
function closemodal() {
    const background = document.querySelector("#modal-bg-display");
    background.remove();
}

// creates or removes a add todo button
function todoButton() {

    const check = document.getElementById("new-todo");
    const checkProject = document.getElementById("project-title");

    if (checkProject.innerText !== "Due today") {
        if (checkProject.innerText !== "Due this week") {
            if (!check) {
                const newTodo = main.appendChild(document.createElement("div"));
                newTodo.setAttribute("id", "new-todo");
                const icon = newTodo.appendChild(document.createElement("img"));
                icon.src = "../src/images/plus-box.svg";
                icon.setAttribute("class", "icon");
                const p = newTodo.appendChild(document.createElement("p"));
                p.innerText = "Add Task";
                newTodo.addEventListener("click", () => {
                    modal();
                });
            }
        }

    }
    if (checkProject.innerText === "Due today" || checkProject.innerText === "Due this week") {
        if (check) {
            check.remove();
        }
    }
}

// clears the page after deleting a project
function clearPage() {
    const headline = document.getElementById("headline-box");
    const button = document.getElementById("new-todo");
    const display = document.getElementById("display");
    headline.remove();
    button.remove();
    display.remove();
}

export { sidebar, projects, display, modal, clearPage, closemodal, inbox, projectPage }