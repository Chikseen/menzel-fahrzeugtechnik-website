const { request, response } = require("express");
const express = require("express");
const app = express();
const Datastore = require("nedb");

app.listen(3000, () => console.log("Connecet with Port:3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

app.post("/test", (request, response) => {
    console.log("ive got a request");

    const data = request.body;

    database.insert(data);
    response.json({
        status: "success",
    });
});

app.get("/api", (request, response) => {
    database.find({}, (err, data) => {
        response.json(data);
    })
});

app.post("/login", (request, response) => {

    const data = request.body;

    database.insert(data);

    response.json({
        status: "success",
    });
});