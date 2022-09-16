import { list, removeTodo, replace } from "./add.js";

function display() {
    for (let i = 0; i < list.length; i++) {

        const container = document.getElementById("display");
        const div = container.appendChild(document.createElement("div"));
        div.setAttribute("class", "todo");

        const deleteColumn = div.appendChild(document.createElement("div"));
        deleteColumn.setAttribute("class", "delete-column");
        const btn = deleteColumn.appendChild(document.createElement("button"));
        btn.setAttribute("id", "delete" + [i]);
        btn.setAttribute("class", "delete-button");
        btn.addEventListener("click", () => {
            let remove = btn.id;
            removeTodo(remove);
        })

        const topRow = div.appendChild(document.createElement("div"));
        topRow.setAttribute("class", "top-row");

        const bottomRow = div.appendChild(document.createElement("div"));
        bottomRow.setAttribute("class", "bottom-row");

        for (let elem in list[i]) {
            if (elem === "title" || elem === "dueDate") {
                const div = topRow.appendChild(document.createElement("div"));
                div.setAttribute("id", [elem]);
                div.innerText = list[i][elem];
            }
            if (elem === "priority") {
                const div = topRow.appendChild(document.createElement("div"));
                div.setAttribute("id","priority-indicator");
                const indicator = document.getElementById("priority-indicator");
                if (list[i][elem] === "low") {
                    indicator.style.background = "green";
                }
                if (list[i][elem] === "medium") {
                    indicator.style.background = "yellow";
                }
                if (list[i][elem] === "high") {
                    indicator.style.background = "red";
                }
            }
            if (elem === "description") {
                const div = bottomRow.appendChild(document.createElement("div"));
                div.innerText = list[i][elem];
            }
        }

        const titles = document.querySelectorAll("#title");
        titles.forEach(title => {
            title.addEventListener("click", () => {
                const input = document.createElement("input");
                input.setAttribute("class", "replace-title");
                title.replaceWith(input);
                input.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        let replaced = list[i].title;
                        let replacement = document.querySelector(".replace-title").value;
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
                input.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        let replaced = list[i].description;
                        let replacement = document.querySelector(".replace-description").value;
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

export { display }