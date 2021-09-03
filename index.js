const { request, response } = require("express");
const express = require("express");
const app = express();
const Datastore = require("nedb");
let SID;

app.listen(3000, () => console.log("Connecet with Port:3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("content.db");
const loginlog = new Datastore("loginlog.db");
database.loadDatabase();
loginlog.loadDatabase();

app.post("/savedata", (request, response) => {

    console.log("Data get saved");
    const data = request.body;
    console.log(data);
    database.insert(data);
    response.json({status: "success" });
});

app.post("/fetchdata", (request, response) => {

    const tocall = request.body;

    console.log("data get called: " + tocall.currentview)

    database.find({window: tocall.currentview}, (err, data) => {
        response.json(data);
    })
});

app.post("/removedata", (request, response) => {

    const data = request.body;
    console.log("Try to remove data with ID: " + data._id);

    database.remove({ _id: data._id }, {}, function (err, numRemoved) {
        console.log(numRemoved)
        if (numRemoved === 0) {
            response.json({status: "failed" });
        }
        if (numRemoved === 1) {
            response.json({status: "success" });
        }
    });
});

let valid;


//REWORK LOGIN WITH NEW KNOWLEGDE
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
//REWORK LOGIN WITH NEW KNOWLEGDE

app.post("/createSession", (request, response) => {

    SID = request.body;
    console.log(SID);
    response.json({ SID });

});

app.post("/validateSession", (request, response) => {

    const sessions = request.body;
    console.log(sessions);

    let valid = false

    if (SID != undefined) {

        console.log("To Compare");
        console.log(sessions.cs);
        console.log(SID.SID);
        if (sessions.cs === SID.SID) {
            valid = true;
            console.log("session = SID");
            response.json({ valid });
            console.log({ valid });
        }
        else {
            valid = false;
            console.log("ungelich");
            response.json({ valid });
            console.log({ valid });
        }
    }
    else {
        valid = false;
        console.log("ungelich");
        response.json({ valid });
        console.log({ valid });
    }
});