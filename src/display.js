import { list, removeTodo, replace, submit, Project } from "./add.js";

function sidebar() {
    const container = document.querySelector(".sidebar");
    const menu = container.appendChild(document.createElement("div"));
    menu.setAttribute("id", "menu");
    const inbox = menu.appendChild(document.createElement("div"));
    inbox.setAttribute("id", "inbox");
    const icon1 = inbox.appendChild(document.createElement("img"));
    icon1.src = "../src/images/inbox.svg";
    icon1.setAttribute("class", "icon");
    const p1 = inbox.appendChild(document.createElement("p"));
    p1.innerText = "Inbox";
    inbox.addEventListener("click", () => {
        display();
    });
    const today = menu.appendChild(document.createElement("div"));
    today.setAttribute("id", "today");
    const icon2 = today.appendChild(document.createElement("img"));
    icon2.src = "../src/images/calendar-today.svg";
    icon2.setAttribute("class", "icon");
    const p2 = today.appendChild(document.createElement("p"));
    p2.innerText = "Today";
    today.addEventListener("click", () => {
        console.log("hey");
    });
    const week = menu.appendChild(document.createElement("div"));
    week.setAttribute("id", "week");
    const icon3 = week.appendChild(document.createElement("img"));
    icon3.src = "../src/images/calendar-week.svg";
    icon3.setAttribute("class", "icon");
    const p3 = week.appendChild(document.createElement("p"));
    p3.innerText = "This Week";
    week.addEventListener("click", () => {
        console.log("hey");
    });

    const projects = container.appendChild(document.createElement("div"));
    projects.setAttribute("id", "projects");
    const title = projects.appendChild(document.createElement("h2"));
    title.textContent = "Projects";
    const newProject = projects.appendChild(document.createElement("div"));
    newProject.setAttribute("id", "new-project");
    const icon4 = newProject.appendChild(document.createElement("img"));
    icon4.src = "../src/images/plus-box.svg";
    icon4.setAttribute("class", "icon");
    const p4 = newProject.appendChild(document.createElement("p"));
    p4.innerText = "Add Project";
    newProject.addEventListener("click", () => {
        const addProject = document.querySelector("#add-project");
        if (!addProject) {
            const input = projects.appendChild(document.createElement("input"));
            input.setAttribute("id", "add-project");
            document.querySelector("#add-project").select();
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    console.log("do something");
                }
                if (e.key === "Escape") {
                    input.remove();
                    buttons.remove();
                }
            })
            const buttons = projects.appendChild(document.createElement("div"));
            buttons.setAttribute("class","buttons");
            const add = buttons.appendChild(document.createElement("button"));
            add.setAttribute("class", "button");
            add.setAttribute("id", "add");
            add.innerText = "Add";
            add.addEventListener("click", () => {
                console.log("do something");
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

function display() {
    for (let i = 0; i < list.length; i++) {

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

        for (let elem in list[i]) {
            if (elem === "title") {
                const p = topRow.appendChild(document.createElement("p"));
                p.setAttribute("id", [elem]);
                p.innerText = list[i][elem];
            }
            if (elem === "dueDate") {
                const p = topRow.appendChild(document.createElement("p"));
                p.setAttribute("id", [elem]);
                p.innerText = "Due in: " + list[i][elem];
            }
            if (elem === "priority") {
                const div = priorityColumn.appendChild(document.createElement("div"));
                div.setAttribute("id", [elem]);
                div.setAttribute("class", "priority-indicator");
                if (list[i][elem] === "low") {
                    div.style.background = "green";
                }
                if (list[i][elem] === "medium") {
                    div.style.background = "yellow";
                }
                if (list[i][elem] === "high") {
                    div.style.background = "red";
                }
            }
            if (elem === "description") {
                const div = bottomRow.appendChild(document.createElement("div"));
                div.setAttribute("id", "description");
                if (list[i][elem] === undefined) {
                    const emptyDescription = div.appendChild(document.createElement("p"));
                    emptyDescription.setAttribute("class", "empty");
                    emptyDescription.innerText = "Add a description";
                }
                else {
                    div.innerText = list[i][elem];
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
                        let replaced = list[i].title;
                        let replacement = document.querySelector(".replace-title").value;
                        if (replacement != "") {
                            replace(replaced, replacement);
                        }
                        else {
                            let replacement = list[i].title;
                            replace(replaced, replacement);
                        }
                    }
                    if (e.key === "Escape") {
                        let replaced = list[i].title;
                        let replacement = list[i].title;
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
                        let replaced = list[i].description;
                        let replacement = document.querySelector(".replace-description").value;
                        if (replacement != "") {
                            replace(replaced, replacement);
                        }
                        else {
                            let replacement = list[i].description;
                            replace(replaced, replacement);
                        }
                    }
                    if (e.key === "Escape") {
                        console.log(list[i].description);
                        let replaced = list[i].description;
                        let replacement = list[i].description;
                        replace(replaced, replacement);
                    }
                });
            });
        })

        const priorities = document.querySelectorAll("#priority");
        priorities.forEach(priority => {
            priority.addEventListener("click", () => {
                const input = document.createElement("select");
                input.setAttribute("class", "priority-group");
                let low = input.appendChild(document.createElement("option"));
                low.value = low;
                low.textContent = "Low";
                let medium = input.appendChild(document.createElement("option"));
                medium.value = medium;
                medium.textContent = "Medium";
                let high = input.appendChild(document.createElement("option"));
                high.value = high;
                high.textContent = "High";
                priority.replaceWith(input);
            })
        })

    }
}

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
    emptyDate.setAttribute("value", "2018-07-22");
    emptyDate.setAttribute("min", "2018-01-01");

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

function closemodal() {
    const background = document.querySelector("#modal-bg-display");
    const modal = document.querySelector("#modal");
    background.remove();
    modal.remove();
}

export { sidebar, display, modal, closemodal }