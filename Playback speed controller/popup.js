let speed = 1.0;
const MAX_SPEED = 5.0;
const MIN_SPEED = 0.2;
const SPEED_INCREMENT = 0.2;

function setSpeed(newSpeed) {
  speed = newSpeed;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tabId = tabs[0].id;
    chrome.tabs.sendMessage(tabId, { action: 'setPlaybackSpeed', speed: speed }, function (response) {
      if (response && response.success) {
        document.getElementById("toggleButton").innerHTML = speed.toFixed(1) + "x";
      } else {
        console.error('Failed to set playback speed:', response ? response.message : 'Unknown error');
      }
    });
  });
}

function adjustSpeed(event) {
  let newSpeed = speed;
  if (event.target.id === "increaseButton") {
    newSpeed += SPEED_INCREMENT;
  } else {
    newSpeed -= SPEED_INCREMENT;
  }
  if (newSpeed > MAX_SPEED) {
    newSpeed = MAX_SPEED;
  } else if (newSpeed < MIN_SPEED) {
    newSpeed = MIN_SPEED;
  }
  setSpeed(newSpeed);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("decreaseButton").addEventListener("click", adjustSpeed);
  document.getElementById("toggleButton").addEventListener("click", adjustSpeed);
  document.getElementById("increaseButton").addEventListener("click", adjustSpeed);
});
