let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let isStart = true;

const divTimer = document.querySelector(".container-stopwatch");
const spanSeconds = document.querySelector(".seconds");
const spanMinutes = document.querySelector(".minutes");
const spanHours = document.querySelector(".hours");

const clearColor = () => {
    divTimer.classList.remove("red");
    divTimer.classList.remove("black");
    divTimer.classList.remove("green");
    divTimer.classList.remove("silver");
}
const showTime = () => {
    if(seconds < 10){
        spanSeconds.innerText = "0" + seconds;
    }else{
        spanSeconds.innerText = seconds;
    }
    if(minutes < 10){
        spanMinutes.innerText = "0" + minutes;
    }else{
        spanMinutes.innerText = minutes;
    }
    if(hours < 10){
        spanHours.innerText = "0" + hours;
    }else{
        spanHours.innerText = hours;
    }
}

const counterTimer = () => {
    seconds += 1;
    if( seconds === 60){
        seconds = 0;
        minutes += 1;
        if(minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }
    showTime();  
}

document.getElementById("btnStart").addEventListener("click", () => {
    if(isStart){
        isStart = false;
        clearColor();
        divTimer.classList.add("green");    
        timer = setInterval(counterTimer, 1000);
    }        
})

document.getElementById("btnStop").addEventListener("click", () => {
    isStart = true;
    clearInterval( timer);
    showTime();
    clearColor();
    divTimer.classList.add("red");
})

document.getElementById("btnReset").addEventListener("click", () => {
    isStart = true;
    clearInterval( timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    showTime();    
    clearColor();
    divTimer.classList.add("silver");

})