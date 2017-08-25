(function(){

  function playSound(e) {
    let key = e.keyCode || e.target.dataset.key;
    const audio = document.querySelector(`audio[data-key='${key}']`);
    const pad = document.querySelector(`.pad[data-key='${key}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    pad.classList.add('playing');
  }

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const pads = document.querySelectorAll('.pad');
  pads.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);
  window.addEventListener('click', playSound);
}());
