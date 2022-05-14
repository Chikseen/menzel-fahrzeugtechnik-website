require("dotenv").config();
const JSONdb = require("simple-json-db");
const fs = require("fs");
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const corsImage = require("cors");
const { v4: uuidGen } = require("uuid");
const nodemailer = require("nodemailer");
const path = require("path");

const initMailTemplate = require("./mailHandling/initMailTemplate.js");
const databaseIntegrity = require("./dbHandler/init.js");
const ot = require("./dbHandler/openTimes.js");
const am = require("./dbHandler/aktiveMessages.js");
const news = require("./dbHandler/news.js");

let pathPreFix;
if (process.env.NODE_ENV === "development") {
  console.log("server is running in Dev mode");
  pathPreFix = ".";
} else {
  pathPreFix = "";
}

var whitelist = [
  "https://dev.menzel-fahrzeugtechnik.de",
  "https://menzel-fahrzeugtechnik.de",
  "http://192.168.2.100:7080",
  "http://192.168.2.100:8080",
  "http://192.168.2.100:8081",
  "app://.",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

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
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));
const port = 7080;
app.listen(port, () => console.log("Connecet with Port: " + port));

async function checkKey(key) {
  console.log("check Key", key);
  const user = new JSONdb(pathPreFix + "/database/user.json");
  let foundSth = false;
  const uuid = Object.keys(user.JSON());
  try {
    for (let i = 0; i < uuid.length; i++) {
      if (await bcrypt.compare(key, uuid[i])) {
        foundSth = true;
      }
    }
    if (foundSth) return true;
    else return false;
  } catch (error) {
    return false;
  }
}

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.post("/key/check", async (req, res) => {
  res.json({ status: await checkKey(req.body.key) });
});

app.post("/key/sendNew", async (req, res) => {
  console.log("sendNewKey", req.body);
  const uuid = uuidGen();
  // SEND MAIL HERE
  const sendNewAuthmail = {
    subject: "new authKey",
    html: initMailTemplate.newauthKey(uuid),
  };
  if (process.env.NODE_ENV != "development") {
    sendMail(transporter, mailAuth.get("name"), mailAuth.get("name"), sendNewAuthmail);
  } else {
    console.log("uuid", uuid);
  }
  // HASH N STORE
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(uuid, salt);
  const user = new JSONdb(pathPreFix + "/database/user.json");
  user.set(hashed, req.body.user);
  res.json({ status: false });
});

app.post("/key/getuser", async (req, res) => {
  if (await checkKey(req.body.key)) {
    const user = new JSONdb(pathPreFix + "/database/user.json");
    const allNames = user.JSON();
    let toSend = [];
    Object.keys(allNames).forEach((name) => {
      toSend.push(user.get(name));
    });
    res.json({ data: toSend });
  } else res.json({ status: "invalidKey" });
});

app.post("/activeMessages/create", async (req, res) => {
  if (await checkKey(req.body.key)) res.json(am.create(pathPreFix, req));
  else res.json({ status: "invalidKey" });
});
app.post("/activeMessages/get", async (req, res) => {
  if (await checkKey(req.body.key)) res.json(am.getAll(pathPreFix));
  else res.json({ status: "invalidKey" });
});
app.post("/activeMessages/getFilterd", async (req, res) => {
  res.json(am.getFilterd(pathPreFix));
});

app.post("/activeMessages/delete", async (req, res) => {
  if (await checkKey(req.body.key)) res.json(am.delete(pathPreFix, req));
  else res.json({ status: "invalidKey" });
});

app.post("/openTimes/get", async (req, res) => {
  res.json(ot.getDay(pathPreFix));
});

app.post("/openTimes/getAll", async (req, res) => {
  res.json(ot.getAll(pathPreFix));
});

app.post("/openTimes/set", async (req, res) => {
  if (await checkKey(req.body.key)) res.json(ot.set(pathPreFix, req));
  else res.json({ status: "invalidKey" });
});

app.post("/news/get", async (req, res) => {
  res.json(news.get(pathPreFix, req));
});

app.post("/news/loadAll", async (req, res) => {
  if (await checkKey(req.body.key)) res.json(news.getAll(pathPreFix, req));
  else res.json({ status: "invalidKey" });
});

app.post("/news/create", async (req, res) => {
  if (await checkKey(req.body.key)) res.json(news.create(pathPreFix, req));
  else res.json({ status: "invalidKey" });
});

app.post("/news/delete", async (req, res) => {
  if (await checkKey(req.body.key)) res.json(news.delete(pathPreFix, req));
  else res.json({ status: "invalidKey" });
});

// EXPRESS SETUP
const imageapp = express();
imageapp.use(corsImage());
imageapp.use(express.urlencoded({ extended: true }));
imageapp.use(express.json({ limit: "100mb" }));
const portimage = 7081;
imageapp.listen(portimage, () => console.log("Connecet with Port: " + portimage));

imageapp.get("/", (req, res) => {
  const header = JSON.stringify(req.query.id);
  let root = "";
  if (process.env.NODE_ENV === "development") root = path.join(__dirname, `database/images`);
  else root = "database/images";
  console.log(header);
  console.log(root);
  var options = {
    root: root,
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  res.sendFile(`${req.query.id}.png`, options, function (err) {
    if (err) {
      res.send(err);
    } else {
      console.log("Sent:", `${req.query.id}.png`);
    }
  });
});
