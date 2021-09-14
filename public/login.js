let loginBTNAL = document.getElementById("login-btn");

loginBTNAL.addEventListener("click", async function () {

    const username = document.getElementById("user").value;
    const passwort = document.getElementById("passwort").value;

    const data = { username, passwort };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
    const response = fetch("/login", options);
    getData();
});

text = document.getElementById("feedback");

async function getData() {
    const response = await fetch("/login");
    const data = await response.json();

    if (data.valid) {
        text.textContent = "Die Anmeldedaten sind korref´kt";
        text.classList.toggle("messagetrue");
        const SID = sessionID(10);

        let datao = {SID};

        console.log("Session ID is send: " + datao.SID);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datao),
        };
        const response = await fetch("/createSession", options);
        window.location.replace("/index.html?id=" + SID);
    }

    else {
        text.textContent = "Die Anmeldedaten sind falsch";
        text.classList.toggle("messagefalse");
    }
}

function sessionID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}