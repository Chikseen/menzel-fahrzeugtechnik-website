const JSONdb = require("simple-json-db");
const { v4: uuidGen } = require("uuid");
const fs = require("fs");

module.exports = {
  get(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");

    const data = news.get("data");
    /*  
    const min = 0;
    const max = 10;
   
    let toSend = [];

     try {
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
    } catch (error) {
      return "an error ocured";
    } */

    return data;
  },
  getAll(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    return news.get("data");
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
    console.log("name", req.body.name);
    fs.writeFile(`${pathPreFix}/database/images/${req.body.name}.png`, binaryData, "binary", function (err) {
      console.log("err", err);
    });
    return { imageId: req.body.name };
  },
  getAllImage(path) {
    return fs.readdirSync(path);
  },
};
