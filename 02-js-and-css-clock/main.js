(function(){

  const hourHand = document.querySelector('.hand.hour');
  const minuteHand = document.querySelector('.hand.minute');
  const secondHand = document.querySelector('.hand.second');

  let currentTime, hoursStart, minutesStart, secondsStart;

  startInterval(function(){
    // find the current time
    currentTime = new Date();
    console.log(currentTime);

    // convert time to fraction of one full rotation around a circle
    hoursRotation = currentTime.getHours() / 12;
    minutesRotation = currentTime.getMinutes() / 60;
    secondsRotation = currentTime.getSeconds() / 60;

    // set the hands' positions
    setHandsRotation(hoursRotation, minutesRotation, secondsRotation);

  }, 1000)

  function setHandsRotation(hour, minute, second) {
    hourHand.style.transform = `rotate(${hour}turn)`;
    minuteHand.style.transform = `rotate(${minute}turn)`;
    secondHand.style.transform = `rotate(${second}turn)`;
  }

  function startInterval(callback, time) {
    callback();
    return setInterval(callback, time);
  }

})();
