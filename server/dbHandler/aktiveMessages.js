const JSONdb = require("simple-json-db");
const { v4: uuidGen } = require("uuid");

module.exports = {
  delete(pathPreFix, req) {
    console.log("Delete message");
    const am = new JSONdb(pathPreFix + "/database/activeMessages.json");
    let data = am.get("data");

    const i = data.findIndex((element) => element.uuid == req.body.uuid);

    delete data[i];
    const tosend = [];
    data.forEach((elem) => {
      if (elem != null) tosend.push(elem);
    });

    am.set("data", tosend);
    return tosend;
  },
  getFilterd(pathPreFix) {
    console.log("get Active message");
    const am = new JSONdb(pathPreFix + "/database/activeMessages.json");
    const data = am.get("data");

    const tosend = [];
    data.forEach((elem) => {
      if (elem.showStatus == "true") tosend.push(elem);
    });
    return tosend;
  },
  getAll(pathPreFix) {
    console.log("get All message");

    const am = new JSONdb(pathPreFix + "/database/activeMessages.json");
    const data = am.get("data");
    return data;
  },
  create(pathPreFix, req) {
    console.log("Create new Active message", req.body);

    const am = new JSONdb(pathPreFix + "/database/activeMessages.json");
    const data = am.get("data");
    const toedit = data.find((item) => item.uuid == req.body.uuid);

    console.log("toedit", toedit);

    if (toedit != undefined) {
      const i = data.findIndex((item) => item.uuid == req.body.uuid);
      console.log("index", i);

      data.splice(i, 1);
      data.push(req.body);
    } else {
      req.body.uuid = uuidGen();
      data.push(req.body);
    }

    am.set("data", data);
    return data;
  },
};
