const JSONdb = require("simple-json-db");
const { v4: uuidGen } = require("uuid");
const fs = require("fs");

module.exports = {
  get(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    const data = news.get("data").reverse();
    console.log("fetch news data", req.body);
    if (req.body.top === undefined || req.body.count === undefined) return data;
    else {
      return data.slice(req.body.top, req.body.count);
    }
  },
  getAll(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    return news.get("data").reverse();
  },
  create(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    let data = news.get("data");
    req.body.uuid = uuidGen();

    const newO = {
      date: req.body.date,
      titel: req.body.titel,
      text: req.body.text,
      key: req.body.key,
      uuid: req.body.uuid,
      imageIds: req.body.images,
    };

    data.push(newO);
    news.set("data", data);
    return data;
  },
  delete(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    console.log("Delete message");
    let data = news.get("data");

    const i = data.findIndex((element) => element.uuid == req.body.uuid);

    delete data[i];
    const tosend = [];
    data.forEach((elem) => {
      if (elem != null) tosend.push(elem);
    });

    news.set("data", tosend);
    return tosend;
  },
  uploadImage(pathPreFix, req) {
    console.log("create new Image");
    const tww = req.body.image.replace(/^data:image\/png;base64,/, "");
    var body = tww,
      base64Data = body,
      binaryData = new Buffer(base64Data, "base64").toString("binary");
    fs.writeFile(`${pathPreFix}/database/images/${req.body.name}.png`, binaryData, "binary", function (err) {
      console.log("err", err);
    });
    return { imageId: req.body.name };
  },
  getAllImage(path) {
    return fs.readdirSync(path);
  },
};
