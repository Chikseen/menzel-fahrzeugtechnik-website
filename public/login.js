let logindata;
let loginBTNAL = document.getElementById("login-btn");

loginBTNAL.addEventListener("click", function () {
    console.log("Try Login");
    
    const username = document.getElementById("user").value;
    const passwort = document.getElementById("passwort").value;

    const data = {username, passwort};

    console.log(data);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };

    const response = fetch("/login", options);
});