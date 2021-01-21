const chronometer = new Chronometer();

console.log(chronometer)
//console.log(chronometer.currentTime)

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printSeconds()
  

}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  let secStr = String(chronometer.getSeconds())

  if (secStr < 10){
    secUni.innerHTML = secStr
  } else {
    secUni.innerHTML = secStr[0]
    secDec.innerHTML = secStr[1]
  }

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  chronometer.startClick()

  //print the correct digit to the display
  printTime()

  if (btnLeft.classList.contains('start')) {
    btnLeft.classList.toggle('stop')
    btnRight.classList.toggle('split')
    btnLeft.innerText = 'STOP'
    btnRight.innerText = 'SPLIT'
    //console.log('class + innerttxt of btnLeft: ', btnLeft.className,btnLeft.innerText)
    //console.log('class of btnRight: ', btnLeft.className )
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  chronometer.stopClick()
});
