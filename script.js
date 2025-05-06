let startTime, updatedTime, difference, timerInterval;
let isRunning = false;
let elapsed = 0;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime() - elapsed;
    timerInterval = setInterval(updateTime, 100);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    elapsed = difference;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  elapsed = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (isRunning) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
});

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

  display.textContent =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}
