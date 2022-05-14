const JSONdb = require("simple-json-db");
module.exports = {
  async init(fs, pathPreFix) {
    console.log("Check database integrity");
    if (!fs.existsSync(pathPreFix + "/database")) {
      console.log("creating database Folder");
      fs.mkdirSync(pathPreFix + "/database");
    }
    if (!fs.existsSync(pathPreFix + "/database/data.json")) {
      console.log("creating data.json");
      fs.writeFile(pathPreFix + "/database/data.json", "", "utf8", function (err) {});
    }
    if (!fs.existsSync(pathPreFix + "/database/user.json")) {
      console.log("creating user.json");
      fs.writeFile(pathPreFix + "/database/user.json", "", "utf8", function (err) {});
    }
    if (!fs.existsSync(pathPreFix + "/database/activeMessages.json")) {
      console.log("creating activeMessages.json");
      fs.writeFile(pathPreFix + "/database/activeMessages.json", "utf8", function (err) {});
      const am = new JSONdb(pathPreFix + "/database/activeMessages.json");
      am.set("data", []);
    }
    if (!fs.existsSync(pathPreFix + "/database/news.json")) {
      console.log("creating news.json");
      fs.writeFile(pathPreFix + "/database/news.json", "", "utf8", function (err) {});
      const news = new JSONdb(pathPreFix + "/database/news.json");
      news.set("data", []);
    }
    if (!fs.existsSync(pathPreFix + "/database/images")) {
      console.log("creating images Folder");
      fs.mkdirSync(pathPreFix + "/database/images");
    }
    if (!fs.existsSync(pathPreFix + "/database/openTimes.json")) {
      console.log("creating openTimes.json");
      fs.writeFile(pathPreFix + "/database/openTimes.json", "", "utf8", function (err) {});
      const am = new JSONdb(pathPreFix + "/database/openTimes.json");
      am.set("weekdays", [
        { day: "Sonntag", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: false },
        { day: "Montag", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Dienstag", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Mittwoch", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Donnerstag", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Freitag", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Samstag", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: false },
      ]);
      am.set("exeption", []);
    }
  },
};
