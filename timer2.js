// timer vars will go here
const timerDisplay = document.querySelector('.displayTimeLeft')
let countdown;
let seconds;
let minutes = 120;
let fill;
let secondsLeft;
let interval = 1000;
const startButton = document.querySelector('#startStop');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const breakButton = document.querySelector('#break');
const longBreakButton = document.querySelector('#longBreak')
const resetButton = document.querySelector('#reset');

const cycleCounterDisplay = document.querySelector('#currentCycleDisplay');
const totalCyclesDisplay = document.querySelector('#totalCyclesDisplay');

const sessionTypeDisplay = document.querySelector('#sessionType');
const sessionLengthDisplay = document.querySelector('#showTime');

let sessionInProgress = false;
//controls
let pause = false;

// circle timer vars go here

let no;
let pointToFill = 4.72;
let timeElapsed = 0;

// work cycles
let workCyclesCompleted = 0;
let shortBreaksCompleted = 0;
let fullCyclesCompleted = 0;
let workCycle = false; 
let finishedCycle = false; 
let currentCycle = 0;
let totalNumberOfCycles = 4;

cycleCounterDisplay.innerHTML = fullCyclesCompleted;
totalCyclesDisplay.innerHTML = totalNumberOfCycles;


// countdown function will go here 

function timer(seconds, reset) {
    let timeNow = Date.now();
    let timeThen = timeNow + seconds * 1000;
    
    let counter = document.getElementById('counter').getContext('2d');
    no = seconds;
    newCycle()
    let cw = counter.canvas.width;
    let ch = counter.canvas.height;
    

    countdown = setInterval(() => {
        secondsLeft = Math.round((timeThen - Date.now()) / 1000);
        if (secondsLeft < 0 ) {
            finishedCycle = true;
            clearInterval(countdown);
            clearTimeout(fill);
            cycleCounterDisplay.innerHTML = workCyclesCompleted;
            totalCyclesDisplay.innerHTML = totalNumberOfCycles;
            
            return;
        }

        function fillCounter(reset) {
           
        diff = ((no / seconds) * Math.PI * 2 * 10) - timeElapsed
    
            
        counter.clearRect(0, 0, cw, ch);
        counter.lineWidth = 20;
        counter.fillStyle = '#000';
        counter.strokeStyle = '#e84a5f';
        counter.textAlign = 'center';
        counter.font = "45px monospace";
        counter.fillStyle = 'white';
        counter.fillText(timerDisplay.textContent, 200, 200);
        counter.beginPath();
        counter.arc(200, 200, 180, pointToFill, diff / 10 + pointToFill);
        counter.stroke();
        if (no == 1) {
            clearTimeout(fill);
            counter.fillStyle = '#e84a5f';
            counter.fillRect(0, 0, cw, ch);
            counter.fillStyle = '#white';
            counter.fillText('FInished', 200, 210);
          
        }
        no--;
        
    }
   fillCounter()

    displayTimeLeft(secondsLeft)
    }, interval)  

  
}

// timer function

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds /60);
    const reminderSeconds = seconds % 60;
    const display = `${minutes} : ${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`
    document.title = display;
    timerDisplay.textContent = display;
    
}


// start timer
function startTimer() {

sessionInProgress = true;
finishedCycle = false; 
currentCycle = "WORK";
timeElapsed = 0;
clearInterval(countdown);
workCycle = true;
minutes = 1500;

timer(minutes);
pause = false;
sessionInProgressDisplay();
hidePlayPause();
workCyclesCompleted++;
completedAndOrSkippedSessionCouneter();

}

startButton.addEventListener('click', startTimer);

// play button

function playTimer() {
    pause = false;
    timer(minutes);
    hidePlayPause()
}

playButton.addEventListener('click', playTimer);

// pause button
function pauseTimer() {
   
    if ( pause == false ) {
    clearInterval(countdown);  
    minutes = secondsLeft;
    timeElapsed = 62.8 - diff;
    
    
    pause = true;
    hidePlayPause();
    }
}

pauseButton.addEventListener('click', pauseTimer );

// hide play/pause button

function hidePlayPause() {
    if ( pause == false ) {
        pauseButton.style.display = 'inline-block';
        playButton.style.display = 'none';
    } else {
        playButton.style.display = 'inline-block';
        pauseButton.style.display ='none';
    }
}




// break

function breakTimer() {
    
    clearInterval(countdown); 
    sessionInProgress = true;
    minutes = 300;
    timeElapsed = 0;
    finishedCycle = false;
    currentCycle = "BREAK";
    workCycle = false;
   

    shortBreaksCompleted++;
    
    timer(minutes);
    pause = false;
    sessionInProgressDisplay();
    hidePlayPause();
    completedAndOrSkippedSessionCouneter();
    
}

breakButton .addEventListener('click', breakTimer );

// long break 

function longBreak() {
    clearInterval(countdown); 
    sessionInProgress = true;
    minutes = 900;
    timeElapsed = 0;
    finishedCycle = false;
    currentCycle = "LONG BREAK";
    workCycle = false;
    

    shortBreaksCompleted++;
    
    timer(minutes);
    pause = false;
    sessionInProgressDisplay();
    hidePlayPause();
    completedAndOrSkippedSessionCouneter();
}

longBreakButton.addEventListener('click', longBreak );

// reset 

function resetTimer() {

pause = false;
timeElapsed = 0;
clearInterval(countdown)
minutes = 1500;
timer(minutes)
setTimeout(pauseTimer, 1500)
sessionInProgressDisplay()
shortBreaksCompleted=0;
fullCyclesCompleted=0;
workCyclesCompleted = 0;
completedAndOrSkippedSessionCouneter();
cycleCounterDisplay.innerHTML = fullCyclesCompleted;
 
}

resetButton.addEventListener('click', resetTimer);


// start a new cycle when old one finishes

function newCycle() {
    if ( finishedCycle = true && currentCycle == "work") {
        breakTimer()
    }
    else if ( finishedCycle = true && currentCycle == "break") {
        startTimer()
    }
    else if ( fullCyclesCompleted == 4 ) {
        longBreak()
    }
}

function sessionInProgressDisplay() {

    sessionTypeDisplay.innerHTML = currentCycle;
    sessionLengthDisplay.innerHTML = (minutes / 60).toFixed(0) + "min";

}

// count sessions completed

function completedAndOrSkippedSessionCouneter() {
    if ( workCyclesCompleted == 1 && shortBreaksCompleted == 1) {
        fullCyclesCompleted++;
        workCyclesCompleted = 0;
        shortBreaksCompleted = 0;
        cycleCounterDisplay.innerHTML = fullCyclesCompleted;
    }
}




