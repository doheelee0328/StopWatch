// variables for the buttons
const startStop = document.getElementById("startStopBtn");
const reset = document.getElementById("resetBtn");

// variables for the time values

let seconds = 0;
let miniutes = 0;
let hours = 0;

/*variables for leading 0 (because the stopwatch was only updating with only one digit),
therefore, had to update with a leading 0
*/

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// stop watch function

// varibales for set intervals and timer status

let timerInterval = null;
let timerStatus = "stopped";

let stopwatch = () => {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    miniutes++;

    if (miniutes / 60 === 1) {
      miniutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (miniutes < 10) {
    leadingMinutes = "0" + miniutes.toString();
  } else {
    leadingMinutes = miniutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displaTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
};

// window.setInterval(stopwatch, 1000); - this allows to run the timer

/* if the timer status is equal to stop, the timer will start  and the play button will change
to the pause the button and the timer status will change to start*/
startStop.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopwatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class = "fa-solid fa-pause" id="pause" > </i> `;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"> </i>`;
    timerStatus = "stopped";
  }
});

/* else statement shows that the timer will stop with the clearInteral method and the
icon will change back to the play button and the timerstatus will go stop*/

reset.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  miniutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
});

/* The reset button stops with the clearinterval method but we want to revert the seconds, minutes 
and hours to 0, we are going to display that with 00:00:00 */
