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

// get the DOM element for the <ol>
let splitsL = document.getElementById('splits')

function printTime() {
  printSeconds()
  printMinutes() 

}

function printMinutes() {
  let minStr = String(chronometer.getMinutes())

  if (minStr < 10){
    minUni.innerText = minStr
  } else if (minStr < 60) {
    minUni.innerText = minStr[0]
    minDec.innerText = minStr[1]
  } else {
    minUni.innerText = '8'
    minDec.innerText = '8'
  }

}

function printSeconds() {
  let secStr = String(chronometer.getSeconds())

  if (secStr < 10){
    secUni.innerText = secStr
  } else {
    secUni.innerText = secStr[0]
    secDec.innerText = secStr[1]
  }

}

// ==> BONUS
function printMilliseconds() {
  // for ()
}

function printSplit() {  
  let splittime = chronometer.splitClick() //grab the splittime 
  let li = document.createElement('li') //create an list in the ol

  //give innertext to the listitem and add to ol with class 'splits'
  li.innerText = splittime
  splits.appendChild(li)
  
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.className = 'btn stop'
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  btnRight.className ='btn split'   
  btnRight.innerText ='SPLIT'
}

function setStartBtn() {
  btnLeft.className = 'btn start'
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  btnRight.className = 'btn reset'
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  //console.log('class + innerttxt of btnLeft: ', btnLeft.className,btnLeft.innerText)
  //console.log('class of btnRight: ', btnRight.className, btnRight.innerText )

  if (btnLeft.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime)
    
 
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()  
  }

    //console.log('class + innerttxt of btnLeft: ', btnLeft.className,btnLeft.innerText)
    //console.log('class of btnRight: ', btnRight.className, btnRight.innerText )
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')){
    printSplit()
  } 
  else {
    chronometer.resetClick()
    printTime()
    splits.innerText = ""
  }

});
