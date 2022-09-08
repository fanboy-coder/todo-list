const list = [];

function display () {

    for (let i = 0; i< list.length; i++) {
        const container = document.getElementById("display");
        const div = container.appendChild(document.createElement("div"));
        for (let elem in list[i]) {
            const p = div.appendChild(document.createElement("p"));
            p.innerText = list[i][elem];
        }
    }
}

export { display, list }