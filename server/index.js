require("dotenv").config();
const JSONdb = require("simple-json-db");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const databaseIntegrity = require("./dbHandler/init.js");

let pathPreFix;
if (process.env.NODE_ENV === "development") {
  console.log("server is running in Dev mode");
  pathPreFix = ".";
} else {
  pathPreFix = "";
}

// DATAINIT
databaseIntegrity.init(fs, pathPreFix);

// EXPRESS SETUP
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 7080;
app.listen(port, () => console.log("Connecet with Port: " + port));

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.post("/getall", (req, res) => {
  const data = new JSONdb(pathPreFix + "/database/data.json");
  res.json(data.get("all"));
});

app.post("/createEntry", (req, res) => {
  const data = new JSONdb(pathPreFix + "/database/data.json");
  if (!data.has("all")) data.set("all", []);
  let temp = data.get("all");
  temp.push(req.body.text);
  data.set("all", temp);
  res.json({ new: data.get("all") });
});
