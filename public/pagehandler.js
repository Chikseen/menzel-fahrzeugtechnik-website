
let session;

async function saveData() {
    if (session.valid) {
        const subNavElement = 0;
        const header = document.getElementById("header").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;

        const data = { header, content, image };

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

        for (item of data) {
            const display = document.createElement("div");
            const header = document.createElement("h1");
            const content = document.createElement("p");
            const image = document.createElement("p");
            const id = document.createElement("h1");

            display.classList.add('dynacontent');
            display.setAttribute("id", `${item._id}`);

            header.textContent = `${item.header}`;
            content.textContent = `${item.content}`;
            image.textContent = `${item.image}`;
            id.textContent = "ID: " + `${item._id}`;

            document.getElementById("maincontent").append(display);
            document.getElementById(`${item._id}`).append(header);
            document.getElementById(`${item._id}`).append(content);
            document.getElementById(`${item._id}`).append(image);
            document.getElementById(`${item._id}`).append(id);
        }
        console.log(data);
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

    for (item of data) {
        const display = document.createElement("div");
        const header = document.createElement("h1");
        const content = document.createElement("p");
        const image = document.createElement("p");
        const id = document.createElement("h1");


        display.classList.add('dynacontent');
        display.setAttribute("id", `${item._id}`);

        header.textContent = `${item.header}`;
        content.textContent = `${item.content}`;
        image.textContent = `${item.image}`;
        id.textContent = `${item._id}`;

        document.getElementById("maincontent").append(display);
        document.getElementById(`${item._id}`).append(header);
        document.getElementById(`${item._id}`).append(content);
        document.getElementById(`${item._id}`).append(image);
        document.getElementById(`${item._id}`).append(id);
    }
    console.log(data);

    const displayAdminMenu = document.getElementById("admin");
    if (session.valid) {
        displayAdminMenu.style.display = "realativ";
    }
    else {
        displayAdminMenu.style.display = "none";
    }
}
