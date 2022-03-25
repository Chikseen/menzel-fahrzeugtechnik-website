require("dotenv").config();
const JSONdb = require("simple-json-db");
const fs = require("fs");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { v4: uuidGen } = require("uuid");
const nodemailer = require("nodemailer");
const initMailTemplate = require("./mailHandling/initMailTemplate.js");
const databaseIntegrity = require("./dbHandler/init.js");

let pathPreFix;
if (process.env.NODE_ENV === "development") {
  console.log("server is running in Dev mode");
  pathPreFix = ".";
} else {
  pathPreFix = "";
}

const mailAuth = new JSONdb(pathPreFix + "/database/mailAuth.json", { asyncWrite: false, syncOnWrite: true, jsonSpaces: 4 });
var transporter = nodemailer.createTransport({
  auth: {
    user: mailAuth.get("name"),
    pass: mailAuth.get("apKey"),
  },
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to handle e-mails");
  }
});
function sendMail(transporter, from, to, data) {
  var mailOptions = {
    from: from,
    to: to,
    subject: data.subject,
    html: data.html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return { status: "Failed" };
    } else {
      console.log("Email sent: " + info.response);
      return { status: "success" };
    }
  });
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

app.post("/key/check", async (req, res) => {
  console.log("check Key", req.body);
  const user = new JSONdb(pathPreFix + "/database/user.json");
  let foundSth = false;
  const uuid = Object.keys(user.JSON());
  try {
    for (let i = 0; i < uuid.length; i++) {
      if (await bcrypt.compare(req.body.key, uuid[i])) {
        foundSth = true;
      }
    }
    if (foundSth) res.json({ status: "keyValid" });
    else res.json({ status: "keyNotValid" });
  } catch (error) {
    res.json({ status: "keyNotValid" });
  }
});

app.post("/key/sendNew", async (req, res) => {
  console.log("sendNewKey", req.body);
  const uuid = uuidGen();
  console.log("uuid", uuid);
  // SEND MAIL HERE
  const sendNewAuthmail = {
    subject: "new authKey",
    html: initMailTemplate.newauthKey(uuid),
  };
  if (process.env.NODE_ENV != "development") {
    sendMail(transporter, mailAuth.get("name"), mailAuth.get("name"), sendNewAuthmail);
  }
  // HASH N STORE
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(uuid, salt);
  const user = new JSONdb(pathPreFix + "/database/user.json");
  user.set(hashed, "");
  res.json({ status: "keyNotValid" });
});
