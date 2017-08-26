(function(){

  const hourHand = document.querySelector('.hand.hour');
  const minuteHand = document.querySelector('.hand.minute');
  const secondHand = document.querySelector('.hand.second');

  let currentTime, hoursAngle, minutesAngle, secondsAngle, seconds, minutes, hours;

  startInterval(function(){
    // find the current time
    currentTime = new Date();

    // convert time to fraction of one full rotation around a circle
    seconds = currentTime.getSeconds()
    minutes = currentTime.getMinutes() + seconds / 60;
    hours = currentTime.getHours() + minutes / 60;

    secondsAngle = currentTime.getSeconds() * 360 / 60;
    minutesAngle = (currentTime.getMinutes() + seconds / 60) * 360 / 60;
    hoursAngle = (currentTime.getHours() + minutes / 60) * 360 / 12;

    // set the hands' positions
    setHandsAngle(hoursAngle, minutesAngle, secondsAngle);

  }, 1000)

  function setHandsAngle(hour, minute, second) {
    hourHand.style.transform = `rotate(${hour}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    secondHand.style.transform = `rotate(${second}deg)`;
  }

  function startInterval(callback, time) {
    callback();
    return setInterval(callback, time);
  }

})();
