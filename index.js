const monthSection = document.getElementById("month");
const dateSection = document.getElementById("date");

const currentDate = new Date();
const date = currentDate.getDate(); // Get the current day of the month
const month = currentDate.getMonth() + 1; // Get the current month (January is 0, so add 1)

monthSection.innerHTML = `${month.toString().padStart(2, "0")}`;
dateSection.innerHTML = `${date.toString().padStart(2, "0")}`;
