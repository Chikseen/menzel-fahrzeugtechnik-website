
let session;
let currentview = "home";


async function saveData() {
    if (session.valid) {
        const subNavElement = 0;
        const window = currentview;
        const header = document.getElementById("header").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;
        const timestemp = (new Date().getTime());

        const data = { window, header, content, image, timestemp };

        console.log(data);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        };
        const response = await fetch("/savedata", options)
        const json = await response.json();
        loadcontent();
    }
};

async function removedata(_id) {
    console.log("RMOVE IS CALLED")
    if (session.valid) {

        console.log(_id);

        const data = { _id };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        };
        const response = await fetch("/removedata", options)
        const json = await response.json();

        if (json.status === "failed") {
            console.log("Löschen Fehlgeschalgen")
        }
        else {
            console.log(json)
            loadcontent(json);
            document.getElementById(_id).remove();
        }

    }
};

async function onloaddata() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const cs = urlParams.get("id");
    const sendData = { cs };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendData),
    };

    const responseSession = await fetch("/validateSession", options)
    session = await responseSession.json();

    loadcontent();

    const displayAdminMenu = document.getElementById("admin");
    if (session.valid) {
        displayAdminMenu.style.display = "realativ";
    }
    else {
        displayAdminMenu.style.display = "none";
    }
}

async function loadcontent() {

    const tosend = {currentview};
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tosend),
    };

    const response = await fetch("/fetchdata", options)
    const data = await response.json();

    console.log("UNSORTED")

    console.log(data);

    data.sort(function(a, b) {
        let keyA = new Date(a.timestemp);
        let keyB = new Date(b.timestemp);
        
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    data.reverse();

    console.log("SORTED")

    console.log(data);

    while (document.querySelector(".dynacontent") != null) {
        const removecurrent = document.querySelector(".dynacontent");
        if (removecurrent != null) {
            removecurrent.remove();
        }
    }

    for (item of data) {
        if (`${item.window}` === currentview) {

            const display = document.createElement("div");
            display.classList.add("dynacontent");
            display.setAttribute("id", `${item._id}`);

            const window = document.createElement("h1");
            const header = document.createElement("h1");
            const content = document.createElement("p");
            const image = document.createElement("p");
            const id = document.createElement("h1");

            header.textContent = `${item.header}`;
            content.textContent = `${item.content}`;
            image.textContent = `${item.image}`;
            id.textContent = "ID: " + `${item._id}`;
            window.textContent = "IN: " + `${item.window}`;

            document.getElementById("maincontent").append(display);
            document.getElementById(`${item._id}`).append(header);
            document.getElementById(`${item._id}`).append(content);
            document.getElementById(`${item._id}`).append(image);
            document.getElementById(`${item._id}`).append(id);
            document.getElementById(`${item._id}`).append(window);
            if (session.valid) {
                edit(`${item._id}`);
            }
        }
    }
}

function edit(_id) {
    const editselect = document.createElement("div");
    editselect.classList.add("editable");
    editselect.setAttribute("id", "edit" + _id);

    document.getElementById(_id).append(editselect);

    const remove = document.createElement("div");
    const removeBTN = document.createElement("button");
    remove.setAttribute("id", "remove" + _id);
    removeBTN.setAttribute("id", "removeBTN" + _id);
    removeBTN.onclick = function () { removedata(_id) };
    remove.classList.add("remove");
    removeBTN.classList.add("editBTNs");
    removeBTN.textContent = "Remove";

    document.getElementById("edit" + _id).append(remove);
    document.getElementById("remove" + _id).append(removeBTN);

    const id = document.createElement("h1");
    document.getElementById("remove" + _id).append(id);

}

async function loadview(toload) {
    console.log(toload)
    switch (toload.textContent) {
        case "Home":
            currentview = "home";
            break;
        case "Leistungen":
            currentview = "service";
            break;
        case "Kontakt":
            currentview = "kontakt";
            break;
        case "Handel":
            currentview = "trade";
            break;
        case "Termine":
            currentview = "termine";
            break;
    }
    loadcontent();
}