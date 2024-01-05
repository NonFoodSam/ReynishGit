let isHourly = true;
let hourElement = document.getElementById("Hourly");
hourElement.addEventListener("change", function () {
  isHourly = true;
  hourElement.classList.add("bg-indigo-600");
  dailyElement.classList.remove("bg-indigo-600");
});
let dailyElement = document.getElementById("Daily");
dailyElement.addEventListener("change", function () {
  isHourly = false;
  hourElement.classList.remove("bg-indigo-600");
  dailyElement.classList.add("bg-indigo-600");
});
