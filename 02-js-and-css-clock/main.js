(function(){

  // find DOM elements for each hand
  const hourHand = document.querySelector('.hand.hour');
  const minuteHand = document.querySelector('.hand.minute');
  const secondHand = document.querySelector('.hand.second');

  let currentTime, hoursAngle, minutesAngle, secondsAngle, seconds, minutes, hours;

  // update all hands every second
  startInterval(setHandsAngle, 1000);

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
