
let isLogedin = false;
document.getElementById("open-login").addEventListener("click", async function () {

    console.log("logstate: " + isLogedin);
    if (!isLogedin) {
        console.log("Log in");
        const tryAutoLogin = localStorage.getItem("login");

        if (tryAutoLogin != null) {
            console.log("tryautologin: ");
            console.log(tryAutoLogin);

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: tryAutoLogin,
            };
            const response = await fetch("/login", options);
            const login = await response.json();
            checkSession(null, login);
            loadview("home");
            document.getElementById("open-login").textContent = "Logout";
            isLogedin = true;
            console.log("logstate: " + isLogedin)
        }
        else {

            document.getElementById("login-btn").addEventListener("click", async function () {

                console.log("No autologin key")

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
                const response = await fetch("/login", options);
                const login = await response.json();

                checkSession(data, login)

                const label = document.getElementById("feedback")

                if (login.status) {
                    label.textContent = "Die Anmeldedaten sind korrekt";
                    label.classList.toggle("messagetrue", true);
                    label.classList.toggle("messagefalse", false);
                    loadview("home");
                    document.getElementById("open-login").textContent = "Logout";
                    isLogedin = true;
                    console.log("logstate: " + isLogedin)
                }
                else {
                    label.textContent = "Die Anmeldedaten sind falsch";
                    label.classList.toggle("messagefalse", true);
                    label.classList.toggle("messagetrue", false);
                }
            });
        }
    }
    else {
        console.log("Log out")
        const sid = JSON.parse(sessionStorage.getItem("session"))
        const toSend = { sid: sid.sid, toCreate: "remove" }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toSend),
        };
        const sessionResponse = await fetch("/checkSession", options);
        sessionStorage.removeItem("session")
        isLogedin = false;
        document.getElementById("open-login").textContent = "Login";
        loadview("home");
        document.getElementById("addContentBtn").style.display = "none";
        document.getElementById("login").classList.toggle("show", false)
    }
});

async function checkSession(data, login) {

    if (login.status) {

        if (data != null) {
            localStorage.setItem("login", JSON.stringify(data))
        }

        const SID = 0;

        const toSend = { sid: SID, toCreate: true }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toSend),
        };
        const sessionResponse = await fetch("/checkSession", options);
        const sessionData = await sessionResponse.json();

        console.log("Session data");
        console.log(sessionData);
        sessionStorage.setItem("session", JSON.stringify(sessionData))
        document.getElementById("login").classList.toggle("show", false)
    }
}