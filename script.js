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

document.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) { // Adjust the scroll position threshold as needed
    header.classList.remove('nav-bg-initial');
    header.classList.add('nav-bg-scrolled');
  } else {
    header.classList.remove('nav-bg-scrolled');
    header.classList.add('nav-bg-initial');
  }
});
