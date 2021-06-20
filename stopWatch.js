let milliseconds =0;
let seconds = 0;
let minutes = 0;
let hours = 0;


let displayMilliseconds =0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval= null;

let timerWorking = false;

const displayTime =()=> document.querySelector(".timerDisplay").innerHTML = `${displayHours} : ${displayMinutes} : ${displaySeconds} : ${displayMilliseconds}`;

function updateTimeStrings(){
    if(milliseconds < 10){
        displayMilliseconds = `00${milliseconds}`;
    }
    else if(milliseconds < 100){
        displayMilliseconds = `0${milliseconds}`;
    }
    else{
        displayMilliseconds = milliseconds;
    }


    if(seconds<10){
        displaySeconds = `0${seconds}`;
    }
    else{
        displaySeconds = seconds;
    }


    if(minutes<10){
        displayMinutes = `0${minutes}`;
    }
    else{
        displayMinutes = minutes;
    }


    if(hours<10){
        displayHours = `0${hours}`;
    }
    else{
        displayHours = hours;
    }

}


function setTimer(){
    milliseconds++;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    }
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    if(minutes==60){
        minutes=0;
        hours++;
    }

    updateTimeStrings();
    displayTime();
}

function handleStartTimer(){
    if(!timerWorking){
        interval = setInterval(setTimer,1);
        timerWorking = true;
    }
}

function handlePauseTimer(){
    if(timerWorking){
        clearInterval(interval);
        startButton.innerHTML = `Continue`;
        timerWorking = false;
    }
}

function handleResetTimer(){

    clearInterval(interval);
    timerWorking = false;
    milliseconds =0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    updateTimeStrings();
    displayTime();
    startButton.innerHTML = `Start`;
}

let startButton = document.querySelector("#startTimer");
startButton.addEventListener("click" , handleStartTimer);
document.querySelector("#pauseTimer").addEventListener("click" , handlePauseTimer)
document.querySelector("#ResetTimer").addEventListener("click" , handleResetTimer)
