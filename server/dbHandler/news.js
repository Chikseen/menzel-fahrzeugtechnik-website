const JSONdb = require("simple-json-db");
const { v4: uuidGen } = require("uuid");
const fs = require("fs");

module.exports = {
  get(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");

    const data = news.get("data");

    const min = 0;
    const max = 10;

    let toSend = [];

    for (let i = min; i < max; i++) {
      if (data[i]) {
        console.log("data", data[i]);
        data[i].images = [];
        console.log("ids", data[i].imageIds);
        data[i].imageIds.forEach((uuid) => {
          var bitmap = fs.readFileSync(`${pathPreFix}/database/images/${uuid}.png`);
          const base = new Buffer(bitmap).toString("base64").replace(/^data:image\/png;base64,/, "");
          data[i].images.push(base);
        });
        toSend.push(data[i]);
      }
    }

    return toSend;
  },
  getAll(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    return news.get("data");
  },
  create(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    let data = news.get("data");
    req.body.uuid = uuidGen();
    const imageIds = [];
    req.body.images.forEach((imgRaw) => {
      const tww = imgRaw.replace(/^data:image\/png;base64,/, "");
      const uuid = uuidGen();
      var body = tww,
        base64Data = body,
        binaryData = new Buffer(base64Data, "base64").toString("binary");
      console.log("ui", uuid);
      fs.writeFile(`${pathPreFix}/database/images/${uuid}.png`, binaryData, "binary", function (err) {
        console.log("err", err);
      });
      imageIds.push(uuid);
    });

    const newO = {
      date: req.body.date,
      titel: req.body.titel,
      text: req.body.text,
      key: req.body.key,
      uuid: req.body.uuid,
      imageIds: imageIds,
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
};
