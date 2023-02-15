const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const starbtn = document.querySelector("#starbtn")
const resumebtn = document.querySelector("#resumebtn")
const pausebtn = document.querySelector("#pausebtn")
const resetbtn = document.querySelector("#resetbtn")

let interval;
let minutes = 0;
let seconds= 0;
let miliseconds= 0;
let isPaused = false;

starbtn.addEventListener("click", startTimer)
resetbtn.addEventListener("click", ResetTimer)
pausebtn.addEventListener("click", pauseTimer)
resumebtn.addEventListener("click", resumeTimer)


function startTimer(){
  interval= setInterval(() => {
    if(!isPaused) {
      miliseconds += 10

      if(miliseconds===1000){
        seconds ++;
        miliseconds=0;
      }
      if(seconds===60){
        minutes++;
        seconds=0;
      }
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      milisecondsEl.textContent = miliseconds;
    }
  }, 10);
  starbtn.style.display = "none";
  pausebtn.style.display = "block";
}
function pauseTimer(){
  isPaused= true
  pausebtn.style.display = "none";
  resumebtn.style.display = "block";
}
function resumeTimer(){
  isPaused= false
  pausebtn.style.display = "block";
  resumebtn.style.display = "none";
}

function formatTime(time){
  return time < 10 ? `0${time}` : time
}


function ResetTimer(){
  clearInterval(interval);
  miliseconds=0;
  seconds=0;
  minutes=0;
  minutesEl.textContent ="00"
  secondsEl.textContent ="00"
  milisecondsEl.textContent ="000"

  starbtn.style.display = "block"
  pausebtn.style.display = "none"
  resumebtn.style.display = "none"
}
