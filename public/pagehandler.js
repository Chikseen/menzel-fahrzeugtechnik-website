
let session;
let currentview = "service";


async function saveData() {
    if (session.valid) {
        const subNavElement = 0;
        const window = currentview;
        const header = document.getElementById("header").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;

        const data = { window, header, content, image };

        console.log(data);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        };
        const response = await fetch("/datatoserver", options)
        const json = await response.json();
        console.log(json);
        getData(json);
    }
};


async function getData(data) {
    if (session.valid) {
        document.querySelectorAll('.dynacontent').forEach(e => e.remove());

        loadcontent(data);
    }
}

async function removedata() {
    if (session.valid) {
        const toremove = document.getElementById("remove").value;

        console.log(toremove);

        const data = { toremove };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        };
        const response = await fetch("/removedata", options)
        const json = await response.json();
        getData(json);
    }
};

async function onloaddata() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get("id"));

    const cs = urlParams.get("id");
    const sendData = { cs };



    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendData),
    };

    console.log("P1");
    const responseSession = await fetch("/getSession", options)
    console.log("P2");
    session = await responseSession.json();

    console.log(session);

    const responseOnLoad = await fetch("/onloaddata");

    const data = await responseOnLoad.json();

    loadcontent(data);

    const displayAdminMenu = document.getElementById("admin");
    if (session.valid) {
        displayAdminMenu.style.display = "realativ";
    }
    else {
        displayAdminMenu.style.display = "none";
    }
}

function loadcontent(data) {
    for (item of data) {
        const removecurrent = document.getElementById(`${item._id}`);
        if (removecurrent != null) {
            removecurrent.remove();
        }
    }
    for (item of data) {
        console.log("compare: " + `${item.window}` + " with: " + currentview)
        if (`${item.window}` === currentview) {

            console.log("new will be created")

            const display = document.createElement("div");
            const window = document.createElement("h1");
            const header = document.createElement("h1");
            const content = document.createElement("p");
            const image = document.createElement("p");
            const id = document.createElement("h1");

            display.classList.add("dynacontent");
            display.setAttribute("id", `${item._id}`);

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
        }
    }
    console.log(data);
}

async function loadview(toload) {

    const responseOnLoad = await fetch("/onloaddata");
    const data = await responseOnLoad.json();

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

        default:
            console.log("Non Fatal Error: Loading subpage")
            break;
    }

    loadcontent(data);

    console.log("current-view: " + currentview);
}