let loginBTNAL = document.getElementById("login-btn");

loginBTNAL.addEventListener("click", function () {

    const username = document.getElementById("user").value;
    const passwort = document.getElementById("passwort").value;

    const data = { username, passwort };

    console.log(data);

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
    }
    else {
        text.textContent = "Die Anmeldedaten sind falsch";
        text.classList.toggle("messagefalse");
    }
    console.log(data);
}