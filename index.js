const { request, response } = require("express");
const express = require("express");
const app = express();
const Datastore = require("nedb");

app.listen(3000, () => console.log("Connecet with Port:3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("content.db");
const loginlog = new Datastore("loginlog.db");
database.loadDatabase();
loginlog.loadDatabase();

function getandsend(response) {
    console.log("DATALOG")

    database.find({}, (err, data) => {
        response.json(data);
    })
}

app.get("/onloaddata", (request, response) => {
    database.find({}, (err, data) => {
        response.json(data);
    })
});

app.post("/datatoserver", (request, response) => {
    console.log("ive got a request");

    const data = request.body;

    console.log(data);

    database.insert(data);

    getandsend(response);
});

app.post("/removedata", (request, response) => {
    console.log("ive will remove data");

    const data = request.body;
    console.log("WILL BE REMOVED " + data.toremove);

    database.remove({ _id: data.toremove }, {}, function (err, numRemoved) {
        // numRemoved = 1
    });

    getandsend(response);

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





let SID;

app.post("/createSession", (request, response) => {

    SID = request.body;
    console.log(SID);
    response.json({ SID });

});

app.post("/getSession", (request, response) => {

    const sessions = request.body;
    console.log(sessions);

    let valid = false

    if (SID != undefined) {

        console.log("To Compare");
        console.log(sessions.cs);
        console.log(SID.SID);
        if (sessions.cs === SID.SID) {
            valid = true;
            console.log("session = SID")
            response.json({valid});
        }
        else {
            valid = false;
            console.log("ungelich")
            response.json({valid});
        }
    }
});