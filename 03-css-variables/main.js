(function(){

  // find DOM elements for each hand
  const hourHand = document.querySelector('.hand.hour');
  const minuteHand = document.querySelector('.hand.minute');
  const secondHand = document.querySelector('.hand.second');

  // find DOM elements for controls
  const roundnessRange = document.querySelector('#roundness');
  const themeControl = document.querySelectorAll('input[type=radio]');

  // find DOM element containing css variables
  const controls = document.querySelector(':root');

  // define the themes
  const theme = {
    default: {
      "--theme-background": "hsl(222, 15%, 20%)",
      "--theme-rim-center": "hsl(216, 20%, 85%)",
      "--theme-face": "hsl(222, 20%, 72%)",
      "--theme-hand": "hsl(222, 100%, 10%)",
      "--theme-second-hand": "hsl(350, 60%, 40%)",
      "--theme-outer-shadow": "hsla(222, 50%, 10%, 0.7)",
      "--theme-inner-shadow": "hsla(222, 50%, 10%, 0.2)"
    },
    alternate: {
      "--theme-background": "hsl(210, 30%, 80%)",
      "--theme-rim-center": "hsl(350, 90%, 60%)",
      "--theme-face": "hsl(350, 5%, 15%)",
      "--theme-hand": "hsl(300, 5%, 97%)",
      "--theme-second-hand": "hsl(210, 100%, 60%)",
      "--theme-outer-shadow": "hsla(360, 50%, 10%, 0.3)",
      "--theme-inner-shadow": "hsla(360, 50%, 10%, 0.9)"
    }
  }

  let currentTime, hoursAngle, minutesAngle, secondsAngle, seconds, minutes, hours;

  // update all hands every second
  startInterval(setHandsAngle, 1000);

  // attach event listener to roundness range slider
  roundnessRange.addEventListener('input', changeRoundness);

  // attach event listeners to theme radio inputs
  themeControl.forEach(function(radioInput) {
    radioInput.addEventListener('click', changeTheme);
  })
  
  function changeRoundness(e) {
    controls.style.setProperty('--clock-roundness', this.value);
  }

  function changeTheme(e) {
    for (var key in theme[this.value]) {
      controls.style.setProperty(key, theme[this.value][key]);
    }
  }

  function setHandsAngle() {

    // find the current time
    currentTime = new Date();

    // get time units and make them more precise
    seconds = currentTime.getSeconds();
    minutes = currentTime.getMinutes() + seconds / 60;
    hours = currentTime.getHours() + minutes / 60;

    // compute the angles of each hand
    secondsAngle = seconds * 360 / 60;
    minutesAngle = (currentTime.getMinutes() + seconds / 60) * 360 / 60;
    hoursAngle = (currentTime.getHours() + minutes / 60) * 360 / 12;

    // set the hands' css rotations
    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
  }

  // modify setInterval to execute the callback immediately instead of after the interval
  function startInterval(callback, time) {
    callback();
    return setInterval(callback, time);
  }

})();
