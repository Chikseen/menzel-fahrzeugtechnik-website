const date = {
  dateObjectToDDMMYYYY(payload) {
    const date = new Date(payload);
    return `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
  },
};

export default date;
