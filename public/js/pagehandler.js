
let currentview = "home";

async function saveData() {
    if (await validate()) {

        let content = {}


        if (currentview == "news") {
            content = {
                header: document.getElementById("headertext").value,
                text: document.getElementById("contenttext").value, 
                image: previewIMG()
            }
        }
        if (currentview == "trade") {
            content = { 
                header: document.getElementById("headertext").value, 
                text: document.getElementById("contenttext").value,
                spec: document.getElementById("specialtext").value, 
                price: document.getElementById("pricetext").value,  
                image: previewIMG() }
        }
        const window = currentview;

        let timestemp = (new Date().getTime());
        if (document.getElementById("savedata").textContent == "Update Data") {
            timestemp = getTimeStemp();
            removedata(getid());
        }

        const data = { window, content, timestemp };

        console.log("Save Data: ");
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
        addContentWindow();
    }
};

function previewIMG() {

    const image = document.getElementById('IMGpreviewSPV');
    const image64 = getDataUrl(image);
    const input = document.getElementById('imageUpload');
    const [file] = input.files;
    if (file) {
        image.src = URL.createObjectURL(file)
    }
    return image64;
}

function getDataUrl(img) {

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, canvas.width, img.height);
    return canvas.toDataURL('image/jpeg');
}


async function removedata(_id) {
    if (await validate()) {

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
            loadcontent(json);
            document.getElementById(_id).remove();
        }
    }
};

async function onloaddata() {

    console.log("Check SESION: " + await validate())

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (await validate()) {
        previewIMG();
    }
    loadview(document.getElementById("home"));
}

async function validate() {

    const sid = JSON.parse(sessionStorage.getItem("session"))

    if (sid != null) {
        const toSend = { sid: sid.sid, toCreate: false }

        console.log("Check with sid: " + sid.sid)

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toSend),
        };
        const sessionResponse = await fetch("/checkSession", options);
        const sessionData = await sessionResponse.json();

        return sessionData.sessionStatus;
    }
    else {
        return false;
    }
}

async function loadcontent() {

    const tosend = { currentview };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tosend),
    };

    const response = await fetch("/fetchdata", options)
    const data = await response.json();

    data.sort(function (a, b) {
        let keyA = new Date(a.timestemp);
        let keyB = new Date(b.timestemp);

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    data.reverse();

    cleanSite();

    for (item of data) {
        if (`${item.window}` === currentview) {
            //!!!   TO-DO   !!! ADD NEW FUNCTION TO SPERATE BETWEEN DIFFRENT CONTENT.CONTENT

            const display = document.createElement("div");
            display.classList.add("dynacontent");
            display.setAttribute("id", `${item._id}`);

            const window = document.createElement("p");
            const header = document.createElement("h1");
            const content = document.createElement("p");
            const image = document.createElement("img");
            const id = document.createElement("p");

            header.textContent = `${item.content.header}`;
            content.textContent = `${item.content.text}`;

            id.textContent = "ID: " + `${item._id}`;
            window.textContent = "IN: " + `${item.window}`;

            document.getElementById("maincontent").append(display);
            document.getElementById(`${item._id}`).append(header);
            document.getElementById(`${item._id}`).append(content);

            if (image.getAttribute('src') != "undefined") {
                image.src = item.content.image;
                if (image.getAttribute('src') != "data:,") {
                    document.getElementById(`${item._id}`).append(image);
                }
            }
            if (`${item.window}` == "trade") {
                const spec = document.createElement("p");
                const price = document.createElement("p");

                spec.textContent = `${item.content.spec}`;
                price.textContent = `${item.content.price}` + " €";

                document.getElementById(`${item._id}`).append(spec);
                document.getElementById(`${item._id}`).append(price);
            }

            if (await validate()) {
                edit(item);
                document.getElementById(`${item._id}`).append(id);
                document.getElementById(`${item._id}`).append(window);
            }
        }
    }

    console.log("currentview: " + currentview)

    if (await validate()) {
        document.getElementById("content-add").classList.toggle("show", true);
        document.getElementById("open-login").textContent = "Logout";

        if ((currentview == "news") || (currentview == "trade")) {
            document.getElementById("addContentBtn").classList.toggle("show", true);
            if (currentview == "trade") {
                document.getElementById("price-div").classList.toggle("show", true);
                document.getElementById("spec-div").classList.toggle("show", true);
            }
        }
    }
}

function edit(data) {

    const _id = data._id

    const editselect = document.createElement("div");
    editselect.classList.add("editable");
    editselect.setAttribute("id", "edit" + _id);

    document.getElementById(_id).append(editselect);

    const remove = document.createElement("div");
    const removeBTN = document.createElement("button");
    const editBTN = document.createElement("button");
    remove.setAttribute("id", "remove" + _id);

    removeBTN.setAttribute("id", "removeBTN" + _id);
    editBTN.setAttribute("id", "editBTN" + _id);

    removeBTN.onclick = function () { removedata(_id) };
    editBTN.onclick = function () { editdata(_id, data) };

    remove.classList.add("remove");

    removeBTN.classList.add("editBTNs");
    editBTN.classList.add("editBTNs");

    removeBTN.textContent = "Remove";
    editBTN.textContent = "Edit";

    document.getElementById("edit" + _id).append(remove);
    document.getElementById("remove" + _id).append(removeBTN);
    document.getElementById("remove" + _id).append(editBTN);
}

let movets;
let moveid;

function editdata(id, data) {
    addContentWindow()
    document.getElementById("headertext").textContent = data.header
    document.getElementById("contenttext").textContent = data.content
    document.getElementById("savedata").textContent = "Update Data"

    const image = data.image;

    document.getElementById("IMGpreviewSPV").src = data.image;

    movets = data.timestemp;
    moveid = data._id;
    console.log("TS: " + data.timestemp)
    console.log("ID: " + data._id)
}

function cleanSite() {
    while (document.querySelector(".dynacontent") != null) {
        const removecurrent = document.querySelector(".dynacontent");
        if (removecurrent != null) {
            removecurrent.remove();
        }
    }
    while (document.querySelector(".news-pre-view") != null) {
        const removecurrent = document.querySelector(".news-pre-view");
        if (removecurrent != null) {
            removecurrent.remove();
        }
    }
    while (document.querySelector(".trade-pre-view") != null) {
        const removecurrent = document.querySelector(".trade-pre-view");
        if (removecurrent != null) {
            removecurrent.remove();
        }
    }
    document.getElementById("static-home").classList.toggle("show", false)
    document.getElementById("static-contact").classList.toggle("show", false);
    document.getElementById("hide-adder").classList.toggle("show", false);
    document.getElementById("content-add").classList.toggle("show", false);
    document.getElementById("price-div").classList.toggle("show", false);
    document.getElementById("spec-div").classList.toggle("show", false);
}

function getTimeStemp() {
    return movets;
}

function getid() {
    return moveid;
}

function loadview(toload) {

    switch (toload.textContent) {
        case "Home":
            currentview = "home";
            cleanSite()
            loadNewsPreview();
            document.getElementById("static-home").classList.toggle("show", true);
            break;
        case "Aktuelles":
            currentview = "news";
            loadcontent();
            break;
        case "Leistungen":
            currentview = "service";
            cleanSite()
            break;
        case "Kontakt":
            currentview = "kontakt";
            cleanSite()
            document.getElementById("static-contact").classList.toggle("show", true);
            lmap.invalidateSize()
            break;
        case "Handel":
            currentview = "trade";
            loadcontent();
            break;
        case "Termine":
            currentview = "termine";
            cleanSite()
            break;
        default:
            currentview = "home";
            cleanSite()
            break;
    }

}

async function addContentWindow() {
    document.getElementById("headertext").textContent = "";
    document.getElementById("contenttext").textContent = "";
    document.getElementById("IMGpreviewSPV").src = "";
    document.getElementById("savedata").textContent = "Save Data";
    if (await validate()) {
        document.getElementById("hide-adder").classList.toggle("show");
    }
}

document.getElementById("open-login").addEventListener("click", function () {
    document.getElementById("login").classList.toggle("show");
});
document.getElementById("close-login-btn").addEventListener("click", function () {
    document.getElementById("login").classList.toggle("show", false);
});
document.getElementById("preview-news").addEventListener("click", function () {
    loadview(document.getElementById("news"));
});
