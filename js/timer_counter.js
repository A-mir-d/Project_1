const countdownDate = new Date("2027-01-15T00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown25").innerHTML = "زمان به پایان رسید!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#countdown25 .days").textContent = days;
  document.querySelector("#countdown25 .hours").textContent = hours;
  document.querySelector("#countdown25 .minutes").textContent = minutes;
  document.querySelector("#countdown25 .seconds").textContent = seconds;
}, 1000);
