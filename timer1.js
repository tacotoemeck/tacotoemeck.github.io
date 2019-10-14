// timer variables here:
const timerDisplay = document.querySelector('.timerTimeLeft');
const counterSection = document.querySelector('.counter');

let countdown;
let sessionInProgress = false;
let finishedCycle = false;

let currentCycle = "WORK";

let seconds = 1500;
let workSessionLength = 1500;
let shortBreakLength = 300;
let longBreakLength = 900;

// auto-play
let autoPlayStatus = false;

// log display variables
let fullCycleCounterDisplay = 0;
let fullCycleCounterTotalDisplay = 2;
let fullCycleCompleted = false;

let workCycleCounterDisplay = 0;
let workCycleCounterTotalDisplay = 4;

let breakCycleCounterDisplay = 0;
let breakCycleCounterTotalDisplay = 3;

let longBreaksDisplay = 0;

// buttons
const workButton = document.querySelector('#work');
const breakButton = document.querySelector('#break');
const longBreakButton = document.querySelector('#longBreak');

const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const skipButton = document.querySelector('#skip');

// settings menu
const settingsMenu = document.querySelector('#burger');
const settingsElementDisplay = document.querySelector('.settingsElement');
const settingsForm = document.getElementById("myForm");
const elementsDisplay = document.querySelector('.elements');
const resetButton = document.querySelector('#resetButton');
let settingMenuONorOFF = false;

// work duration range set
let sliderWorkDuration = document.querySelector('#workDuration');
let outputWorkDuration = document.querySelector('#showValueWorkDuration');
outputWorkDuration.innerHTML = sliderWorkDuration.value;

sliderWorkDuration.oninput = function() {
    outputWorkDuration.innerHTML = this.value + "min";
    workSessionLength = (this.value) * 60;
    workSession(workSessionLength)
  }
// short break duration set
let sliderShortDuration = document.querySelector('#shortDuration');
let outputShortDuration = document.querySelector('#showValueShortDuration');
outputShortDuration.innerHTML = sliderShortDuration.value;

sliderShortDuration.oninput = function() {
    outputShortDuration.innerHTML = this.value + "min";
    shortBreakLength = (this.value) * 60;
    shortBreak(shortBreakLength)
  };

// long break duration set
let sliderLongDuration = document.querySelector('#longDuration');
let outputLongDuration = document.querySelector('#showValueLongDuration');
outputLongDuration.innerHTML = sliderLongDuration.value;

sliderLongDuration.oninput = function() {
    outputLongDuration.innerHTML = this.value + "min";
    longBreakLength = (this.value) * 60;
    longBreak(longBreakLength)
};

// number of rounds
let sliderCycleCounter = document.querySelector('#numberOfSessionsCount');
let outputCycleCounter = document.querySelector('#showValueRoundCounter');
outputCycleCounter.innerHTML = sliderCycleCounter.value;

sliderCycleCounter.oninput = function() {
    showValueRoundCounter.innerHTML = this.value;
    fullCycleCounterTotalDisplay = this.value;
    displayLog()
    
};


// auto-play



function autoPlayToggleSwitch() {
if (autoPlaySwitch.checked == true ) {
    autoPlayStatus = true;
} else {
    autoPlayStatus = false;
}
}
let autoPlaySwitch = document.querySelector('#autoPlaySwitch');


// timer function

function timer(seconds) {
    let timeNow = Date.now();
    let timeThen = timeNow + seconds * 1000;
    pause = false;
    
    countdown = setInterval(() => {
        
        secondsLeft = Math.round((timeThen - Date.now()) / 1000);
        if (secondsLeft < 0 ) {
            finishedCycle = true;
            logSession()
            displayLog() 
            clearInterval(countdown);
            // autoPlayToggleSwitch()
            checkForAutoPlay()
            completedAndOrSkippedSessionCouneter()
            return
        }
        seconds--;
        displayTimeLeft(secondsLeft)
    }, 1000 )
};

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const reminderSeconds = seconds % 60;
    const display = `${minutes}:${reminderSeconds < 10 ? '0':''}${reminderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

// work
function workSession(newTime) {
    
    isSessionInProgress();
    finishedCycle = false; 
    currentCycle = "WORK";
    seconds = workSessionLength;
    
    counterSection.style.backgroundColor = "#ff847c";
    displayTimeLeft(workSessionLength);
    };

workButton.addEventListener('click', workSession);

// short break
function shortBreak() {
    
    isSessionInProgress();
    finishedCycle = false;
    currentCycle = "SHORT";
    seconds=shortBreakLength;
   
    counterSection.style.backgroundColor = "goldenrod";
    displayTimeLeft(shortBreakLength);
};

breakButton.addEventListener('click', shortBreak);

// long break
function longBreak() {
    
    isSessionInProgress();
    finishedCycle = false;
    currentCycle = "LONG";
    seconds = longBreakLength;

    counterSection.style.backgroundColor = "#728C00";
    displayTimeLeft(longBreakLength);
};

longBreakButton.addEventListener('click', longBreak);


// Play and Pause

function startSession() {
    displayLog()
    sessionInProgress = true;
    pause = false;
    clearInterval(countdown);
    timer(seconds);
    hidePlayPause();
    checkForAutoPlay()   

};

function pauseTimer() {
   
    if ( pause == false ) {
    clearInterval(countdown);  
    pause = true;
    hidePlayPause();
    seconds = secondsLeft;
    }
};

pauseButton.addEventListener('click', pauseTimer );
playButton.addEventListener('click', startSession);

// hide play/pause button

function hidePlayPause() {
    if ( pause == false ) {
        pauseButton.style.display = 'inline-block';
        playButton.style.display = 'none';
    } else {
        playButton.style.display = 'inline-block';
        pauseButton.style.display ='none';
    }
};

// 

function isSessionInProgress() {
    if ( sessionInProgress == true ) {
        clearInterval(countdown);
        pause = true;
        hidePlayPause(); 
    }
}

// log 

function logSession() {
    if ( currentCycle == "WORK") {
        workCycleCounterDisplay++;
    }
    if ( currentCycle == "SHORT") {
        breakCycleCounterDisplay++;
    }
    if ( currentCycle == "LONG") {
        longBreaksDisplay++;
    }
}

function displayLog() {
    fullCycleCounter.innerHTML = fullCycleCounterDisplay;
    totalFullCycleNumber.innerHTML = fullCycleCounterTotalDisplay;

    workCycleCounter.innerHTML = workCycleCounterDisplay;
    totalWorkCycleNumber.innerHTML = workCycleCounterTotalDisplay;

    breakCycleCounter.innerHTML = breakCycleCounterDisplay;
    totalBreakCycleNumber.innerHTML = breakCycleCounterTotalDisplay;

    longBreaks.innerHTML = longBreaksDisplay;
    sessionFinished()
}


// settings menu
function showSettingMenu() {
    if (settingMenuONorOFF == false ) {
    settingsElementDisplay.style.display = "flex";
    elementsDisplay.style.display = "none";


    settingMenuONorOFF = true;
    } else {
        elementsDisplay.style.display = "flex";
        settingsElementDisplay.style.display = "none"; 

        settingMenuONorOFF = false;

    }
}

settingsMenu.addEventListener('click', showSettingMenu)

// form ( loop through the buttons instead of having a function for each)

function setWorkDurationFunc(e) {
   e.preventDefault();
   let newTime = this.newTimeWork.value;
   workSessionLength = newTime;
   workSession(newTime)
   this.reset();
}


function setShortDurationFunc(e) {
    e.preventDefault();
    let newTime = this.newShortTime.value;
    shortBreakLength = newTime;
    shortBreak(newTime)
    this.reset();
 }
 
//  setShortDuration.addEventListener('submit', setShortDurationFunc)


function setLongDurationFunc(e) {
    e.preventDefault();
    let newTime = this.newLongTime.value;
    longBreakLength = newTime;
    longBreak(newTime)
    this.reset();
 }
 
//  setLongDuration.addEventListener('submit', setLongDurationFunc)

function setNumberOfSessionsFunc(e) {
    e.preventDefault();
    let newValue = this.newSessionsTotal.value;
    fullCycleCounterTotalDisplay = newValue;
    displayLog();
    this.reset();
}

// setNumberOfSessions.addEventListener('submit', setNumberOfSessionsFunc)

// range

// sliderWorkDuration.



// set auto play

function autoPlay() {
    if ( finishedCycle == true && currentCycle == "WORK") {
        shortBreak();
        pause = false;
        hidePlayPause();
        timer(seconds);
        displayLog();
    }
    else if ( finishedCycle == true && currentCycle == "SHORT") {
        workSession();
        pause = false;
        hidePlayPause();
        timer(seconds);
        displayLog();
    }
    else if ( fullCycleCounterDisplay == fullCycleCounterTotalDisplay ) {
        longBreak();
        displayLog();
    }
}

function checkForAutoPlay() {
    autoPlayToggleSwitch()
    if ( autoPlayStatus == true ) {
        autoPlay()
    }
}

function completedAndOrSkippedSessionCouneter() {
    if ( workCycleCounterDisplay == workCycleCounterTotalDisplay && breakCycleCounterDisplay >= breakCycleCounterTotalDisplay) {
        
        fullCycleCounterDisplay++;
        workCycleCounterDisplay = 0;
        breakCycleCounterDisplay = -1;
        fullCycleCounter.innerHTML = fullCycleCounterDisplay;

         // added 
        
    }
}

// reset

function resetAll() {
    settingsForm.reset();
    seconds = 1500;
    workSessionLength = 1500;
    shortBreakLength = 300;
    longBreakLength = 900; 
    fullCycleCounterDisplay = 0;
    fullCycleCounterTotalDisplay = 2;

    workCycleCounterDisplay = 0;
    workCycleCounterTotalDisplay = 4;

    breakCycleCounterDisplay = 0;
    breakCycleCounterTotalDisplay = 3;

    longBreaksDisplay = 0;

    outputWorkDuration.innerHTML = sliderWorkDuration.value;
    outputShortDuration.innerHTML = sliderShortDuration.value;
    outputLongDuration.innerHTML = sliderLongDuration.value;
    outputCycleCounter.innerHTML = sliderCycleCounter.value;

    displayLog()
    workSession(workSessionLength);
    
    
}

resetButton.addEventListener('click', resetAll)


// add skip button


function skipToNext() {

        finishedCycle = true;
        logSession();
        hidePlayPause()
        displayLog()
        completedAndOrSkippedSessionCouneter();
        sessionFinished()
        

        if (workCycleCounterDisplay == 0 ){
            workCycleCounterDisplay++;
            breakCycleCounterDisplay++;
            longBreak();
            
            if ( autoPlayStatus == true ) {
                timer(seconds);
            }
        }
        
        else if ( currentCycle == "WORK") {
            
            shortBreak()
            if ( autoPlayStatus == true ) {
                timer(seconds);
            }
        }
        else if ( currentCycle == "SHORT") {
            workSession()
            
            if ( autoPlayStatus == true ) {
                timer(seconds);
            }
        }
        
        else if ( currentCycle == "LONG" ) {
            workSession()
            if ( autoPlayStatus == true ) {
                timer(seconds);
            }
        }
};

skipButton.addEventListener('click', skipToNext)

// add finished function

function sessionFinished() {
 if ( fullCycleCounterDisplay >= fullCycleCounterTotalDisplay) {

    // currentCycle = "DONE"
    // clearInterval(countdown);
    // timerDisplay.style.fontSize = "45px";
    // timerDisplay.style.display = "flex";
    // timerDisplay.style.flexDirection = "column";
    // timerDisplay.textContent = "POMODORO!";
    // timerDisplay.insertAdjacentHTML("beforeend",'<button id="resetButton" class="formButton">RESET</button>');
    resetAll()
 }
};

// add responsivness

// add social media tags

workSession();
displayLog();