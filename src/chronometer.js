class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    //printtimecallback é uma função que vem do index.js.  Precisamos checar se essa função realmente foi passada.  Caso a função tenha sido passada ->>> vamos invocar a função

    this.intervalId = setInterval(() => {

      //should increment by 1 the currentTime property every 1 second
      this.currentTime++;

      //checando se printimecallback existe
      if (printTimeCallback)

        //sim ela existe
        printTimeCallback();

    }, 1000);

  }

  getMinutes() {
    return Math.floor((this.currentTime) / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // return value > 9 ? '' + value : '0' + value;
    // return (value + '').padStart(2,'0');
    //return String(value).padStart(2,'0');

    return value.toString().padStart(2, '0');

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`

  }
}
