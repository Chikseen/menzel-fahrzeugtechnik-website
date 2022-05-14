require("dotenv").config();
const JSONdb = require("simple-json-db");urlencodedap
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
const imageapp = express();
imageapp.use(cors());
imageapp.use(express.urlencoded({ extended: true }));
imageapp.use(express.json({ limit: "100mb" }));
const port = 7081;
imageapp.listen(port, () => console.log("Connecet with Port: " + port));

imageapp.get("/", (req, res) => {
  res.json({ status: "success" });
});
