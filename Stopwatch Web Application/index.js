let timer;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  
  display.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.onclick = () => {
  timer = setInterval(() => {
    elapsedTime += 1000;
    updateDisplay();
  }, 1000);
};

stopButton.onclick = () => clearInterval(timer);

resetButton.onclick = () => {
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
};
