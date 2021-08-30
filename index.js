const { request, response } = require("express");
const express = require("express");
const app = express();
const Datastore = require("mysql");

app.listen(3000, () => console.log("Connecet with Port:3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));


const con = Datastore.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});



app.post("/datatoserver", (request, response) => {
    console.log("ive got a request");

    const data = request.body;

    console.log(data);

    database.insert(data);

    response.json({
        statusme: "success"
    });
});

app.post("/removedata", (request, response) => {
    console.log("ive will remove data");

    const data = request.body;

    console.log(data);

});

app.get("/api", (request, response) => {
    database.find({}, (err, data) => {
        response.json(data);
    })
});

let valid;

app.post("/login", (request, response) => {

    const data = request.body;
    loginlog.insert(data);

    console.log(data);

    if ((data.username === "tim") && (data.passwort === "123")) {
        console.log("login is valid");
        valid = true;
    }
    else {
        console.log("login is not valid");
        valid = false;
    }
});

app.get("/login", (request, response) => {
    response.json({ valid });
});
