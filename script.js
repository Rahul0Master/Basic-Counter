let timer;
let totalSeconds;
let isPaused = false;

function startStopCountdown() {
  if (!timer) {
    startCountdown();
    document.getElementById('startStopIcon').className = 'fas fa-redo';
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById('startStopIcon').className = 'fas fa-play';
  }
}

function startCountdown() {
  if (timer) {
    clearInterval(timer);
  }

  totalSeconds = parseInt(document.getElementById('minutesInput').value, 10) * 60;
  updateTimerDisplay();

  timer = setInterval(function () {
    if (!isPaused) {
      if (totalSeconds === 0) {
        clearInterval(timer);
        timer = null;
        document.getElementById('startStopIcon').className = 'fas fa-play';
      } else {
        updateTimer();
        updateTimerDisplay();
      }
    }
  }, 1000);
}

function updateTimer() {
  totalSeconds--;
}

function updateTimerDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  document.getElementById('timer').textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function resetCountdown() {
  clearInterval(timer);
  document.getElementById('minutesInput').value = '1';
  document.getElementById('timer').textContent = '00:00:00';
  isPaused = false;
  timer = null;
  document.getElementById('startStopIcon').className = 'fas fa-play';
}

function pauseResumeCountdown() {
  isPaused = !isPaused;
  document.getElementById('pauseResumeIcon').className = isPaused ? 'fas fa-play' : 'fas fa-pause';
}

