let timer;
let seconds = 0, minutes = 0, hours = 0;
let running = false;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function formatTime() {
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;
    return `${h}:${m}:${s}`;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    display.textContent = formatTime();
}

startStopBtn.addEventListener("click", function() {
    if (!running) {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = "Stop";
    } else {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
    }
    running = !running;
});

resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    seconds = 0; minutes = 0; hours = 0;
    display.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
    running = false;
    lapsList.innerHTML = ""; // Clear lap times
});

lapBtn.addEventListener("click", function() {
    if (running) {
        const lapTime = document.createElement("li");
        lapTime.textContent = formatTime();
        lapsList.appendChild(lapTime);
    }
});
