class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0    
  }

  startClick(callback) {
      this.intervalID = setInterval(() => {
      this.currentTime += 1      
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  
  getSeconds() {
    //check if you get the correct values
    // console.log('current time', this.currentTime)
    // console.log('current time min', this.currentTime/60)   
    // console.log('current time sec-part', this.currentTime % 60)   
    return this.currentTime % 60 
  }
  twoDigitsNumber() {
    const tens = Math.floor(this.currentTime / 10);
    const ones = this.currentTime % 10;
    const twoDigitNotation = `${tens}${ones}`
    // console.log('value current time: ', this.currentTime)
    // console.log('The tens: ', tens)
    // console.log('The ones: ', ones)
    // console.log(twoDigitNotation)

    return twoDigitNotation
  }
  stopClick() {
    clearInterval(this.intervalID)
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    let min = Math.floor(this.currentTime/60)
    let sec = this.currentTime % 60
    let milli = this.currentTime % 60
    
    let splitTime = ''
    console.log('value current time: ', this.currentTime)
    console.log('min: ', min)
    console.log('sec: ', sec)
    console.log('milli: ', milli)

    let minDigit
    let secDigit
    let milliDigit
    if (min < 10)   {minDigit = `${0}${min}`} 
             else   {minDigit = `${min}`}
    if (sec < 10)   {secDigit = `${0}${sec}`} 
             else   {secDigit = `${sec}`} 
    if (milli < 10) {milliDigit = `${0}${milli}`} 
              else  {milliDigit = `${milli}`}

    console.log(`${minDigit}:${secDigit}:${milliDigit}`)
    //return(`${minDigit}:${secDigit}:${milliDigit}`) // incl millisec
    return(`${minDigit}:${secDigit}`)
  }
}

