const JSONdb = require("simple-json-db");

module.exports = {
  getAll(pathPreFix) {
    console.log("get All openTimes");
    const data = new JSONdb(pathPreFix + "/database/openTimes.json");
    return data.JSON();
  },
  getDay(pathPreFix) {
    console.log("get openTimes");

    const date = new Date();
    const dataFile = new JSONdb(pathPreFix + "/database/openTimes.json");
    const data = dataFile.get("weekdays")[date.getDay()];

    console.log("data", data);
    let payload = {};
    const dateStart = new Date(
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}${data.timeStart}`
    );
    const dateEnd = new Date(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}${data.timeEnd}`);

    if (date > dateStart && date < dateEnd && data.isOpen) {
      payload.isOpen = "Geöffnet";
      payload.nextOpen = `Schließt ${String(dateEnd.getHours()).padStart(2, "0")}:${String(dateEnd.getMinutes()).padStart(2, "0")}`;
    } else {
      payload.isOpen = "Geschlossen";

      let i = 1;
      while (!dataFile.get("weekdays")[(date.getDay() + i) % 7].isOpen) {
        i++;
      }

      const closedTill = new Date(
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}${
          dataFile.get("weekdays")[(date.getDay() + i) % 7].timeStart
        }`
      );

      console.log("closed tilkl", closedTill);
      console.log("closed tilkl", `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}${
        dataFile.get("weekdays")[(date.getDay() + i) % 7].timeStart
      }`);
      payload.nextOpen = `Öffnet wieder am ${dataFile.get("weekdays")[(date.getDay() + i) % 7].day} um ${String(closedTill.getHours()).padStart(
        2,
        "0"
      )}.${String(closedTill.getMinutes()).padStart(2, "0")}`;
    }
    return payload;
  },
  set(pathPreFix, req) {
    console.log("set new Time", req.body);
    const data = new JSONdb(pathPreFix + "/database/openTimes.json");
    const date = new Date();
    const days = data.get("weekdays");
    const day = days[req.body.toChange];

    const oldStart = new Date(
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}${day.timeStart}`
    );

    // set new start HH
    let newStartHH = "";
    if (req.body.newStartHH == "null") newStartHH = String(oldStart.getHours()).padStart(2, "0");
    else newStartHH = req.body.newStartHH;

    // set new start MM
    let newStartMM = "";
    if (req.body.newStartMM == "null") newStartMM = String(oldStart.getMinutes()).padStart(2, "0");
    else newStartMM = req.body.newStartMM;

    day.timeStart = `T${newStartHH}:${newStartMM}:00`;

    const oldEnd = new Date(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}${day.timeEnd}`);

    // set new End HH
    let newEndHH = "";
    if (req.body.newEndHH == "null") newEndHH = String(oldEnd.getHours()).padStart(2, "0");
    else newEndHH = req.body.newEndHH;

    // set new End MM
    let newEndMM = "";
    if (req.body.newEndMM == "null") newEndMM = String(oldEnd.getMinutes()).padStart(2, "0");
    else newEndMM = req.body.newEndMM;

    day.timeEnd = `T${newEndHH}:${newEndMM}:00`;

    // isOpen
    if (req.body.isOpen != null) day.isOpen = req.body.isOpen;

    data.set("weekdays", days);
    days[req.body.toChange] = day;

    return data.JSON();
  },
};
