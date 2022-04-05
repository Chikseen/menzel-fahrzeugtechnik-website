const JSONdb = require("simple-json-db");
const { v4: uuidGen } = require("uuid");

module.exports = {
  get(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    return news.get("data");
  },
  getAll(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    return news.get("data");
  },
  create(pathPreFix, req) {
    const news = new JSONdb(pathPreFix + "/database/news.json");
    let data = news.get("data");
    req.body.uuid = uuidGen();
    data.push(req.body);
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
