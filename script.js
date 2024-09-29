let countdown;
const workTimerDisplay = document.getElementById('work-time');
const breakTimerDisplay = document.getElementById('break-time');

const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let workTime = 25 * 60; // 25 minut w sekundach
let breakTime = 5 * 60; // 5 minut w sekundach
let timeLeft = workTime;
let isRunning = false;  
let isBreak = false;   

const track = document.querySelector('.track'); 
const coffe = document.querySelector('.coffe'); 
const boat = document.querySelector('.boat');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');

const audio = document.getElementById('start-audio');

function displayTime(seconds, displayElement) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    displayElement.textContent = display;
}

function startTimer() {
    if (isRunning) return; 
    isRunning = true;
  
    if (!isBreak) {
        track.classList.add('animated-drive');
        text1.classList.add('animated-text');
    }
    audio.play();
  //   track.classList.add('animated-drive');
  // text1.classList.add('animated-text');

    countdown = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdown);
           isRunning = false;
            if (isBreak) {
                timeLeft = workTime; 
                displayTime(timeLeft, workTimerDisplay);
                isBreak = false;
            } else {
                timeLeft = breakTime; 
                displayTime(timeLeft, breakTimerDisplay);
                isBreak = true;
              audio.play();
              coffe.classList.add('animated-drive1');
              text2.classList.add('animated-text2');
              track.style.animationPlayState = 'paused';
            }
            startTimer(); // Restartuj timer
        } else {
            displayTime(timeLeft, isBreak ? breakTimerDisplay : workTimerDisplay);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = workTime; 
    displayTime(timeLeft, workTimerDisplay);
    displayTime(breakTime, breakTimerDisplay);
    isRunning = false;  
    isBreak = false; 
    track.classList.remove('animated-drive');
   coffe.classList.remove('animated-drive1');
    text1.classList.remove('animated-text');
  
    track.offsetHeight; 
    coffe.offsetHeight;
     text1.offsetHeight;
    text2.offsetHeight;
  


}

// Obsługa zdarzeń dla pierwszego timera
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Zainicjalizuj wyświetlanie czasu
displayTime(workTime, workTimerDisplay);
displayTime(breakTime, breakTimerDisplay);


// Drugi timer

let countdown2;
const break2TimerDisplay = document.getElementById('break2-time');

const startButton2 = document.getElementById('start2'); 
const resetButton2 = document.getElementById('reset2');

let workTime2 = 30 * 60; // 30 minut w sekundach

let timeLeft2 = workTime2;
let isRunning2 = false;  


// const coffe2 = document.querySelector('.coffe2'); 

function displayTime2(seconds, displayElement) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    displayElement.textContent = display;
}

function startTimer2() {
    if (isRunning2) return; 

   isRunning2 = true;
   audio.play();
   boat.classList.add('animated-drive2');
   text3.classList.add('animated-text');

    countdown2 = setInterval(() => {
        timeLeft2--;
        
        if (timeLeft2 < 0) {
            clearInterval(countdown2);
            isRunning2 = false;
            timeLeft2 = workTime2; // Resetuj czas do pracy
            displayTime2(timeLeft2, break2TimerDisplay);
            audio.play();
        } else {
            displayTime2(timeLeft2, break2TimerDisplay);
        }
    }, 1000);
}

function resetTimer2() {
    clearInterval(countdown2);
    timeLeft2 = workTime2; 
    displayTime2(timeLeft2, break2TimerDisplay);
    isRunning2 = false;  
    boat.classList.remove('animated-drive2');
   text3.classList.remove('animated-text');
}

// Obsługa zdarzeń dla drugiego timera
startButton2.addEventListener('click', startTimer2);
resetButton2.addEventListener('click', resetTimer2);

// Zainicjalizuj wyświetlanie czasu dla drugiego timera
displayTime2(timeLeft2, break2TimerDisplay);
