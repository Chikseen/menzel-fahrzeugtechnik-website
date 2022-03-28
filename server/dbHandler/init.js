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
      fs.writeFile(pathPreFix + "/database/activeMessages.json", "", "utf8", function (err) {});
      const am = new JSONdb(pathPreFix + "/database/activeMessages.json");
      am.set("data", []);
    }
    if (!fs.existsSync(pathPreFix + "/database/openTimes.json")) {
      console.log("creating openTimes.json");
      fs.writeFile(pathPreFix + "/database/openTimes.json", "", "utf8", function (err) {});
      const am = new JSONdb(pathPreFix + "/database/openTimes.json");
      am.set("weekdays", [
        { day: "Sunday", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: false },
        { day: "Monday", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Tuesday", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Wensday", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Thursday", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Friday", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: true },
        { day: "Saturday", timeStart: "T08:00:00", timeEnd: "T16:00:00", isOpen: false },
      ]);
      am.set("exeption", []);
    }
  },
};
