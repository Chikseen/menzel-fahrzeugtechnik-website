require("dotenv").config();
const JSONdb = require("simple-json-db");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

let pathPreFix;
if (process.env.NODE_ENV === "development") {
  console.log("server is running in Dev mode");
  pathPreFix = ".";
} else {
  pathPreFix = "";
}

// EXPRESS SETUP
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));
const port = 7081;
app.listen(port, () => console.log("Connecet with Port: " + port));

app.get("/", (req, res) => {
  res.json({ status: "success" });
});
