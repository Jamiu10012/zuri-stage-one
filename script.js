function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();

  // Update current day of the week
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    daysOfWeek[currentDate.getUTCDay()];

  // Update current UTC time
  const utcTime = currentDate.toUTCString();
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    utcTime;
}

// Update data every second
setInterval(updateDateTime, 1000);
