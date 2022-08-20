const date = {
  dateObjectToDDMMYYYY(payload) {
    const date = new Date(payload);
    return `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
  },
  dateObjectToHHMM(payload) {
    const date = new Date(payload);
    return `${String(new Date(date).getHours()).padStart(2, "0")}:${String(new Date(date).getMinutes()).padStart(2, "0")}`;
  },
};

export default date;
