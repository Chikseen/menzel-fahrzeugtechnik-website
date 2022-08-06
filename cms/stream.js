const express = require("express");
const app = express();
const history = require("connect-history-api-fallback");
const path = require("path");
const httpPort = 8081;

app.listen(httpPort, () => console.log("Connecet with Port:" + httpPort));

app.use(express.static("dist"));
app.use(history());

app.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, "dist/index.html")));