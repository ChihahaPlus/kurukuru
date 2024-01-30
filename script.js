var soundQueue = [];
var audioSource = 'SFX/KuruKuru.mp3';

function playSound(audioSrc) {
  var audio = new Audio(audioSrc);
  audio.currentTime = 0;
  audio.play();
}

function enqueueSound(audioSrc) {
  soundQueue.push(new Audio(audioSrc));
  if (soundQueue.length === 1) {
    playNextSound();
  }
}

function playNextSound() {
  if (soundQueue.length > 0) {
    var nextSound = soundQueue.shift();
    nextSound.addEventListener('ended', playNextSound);
    nextSound.play();
  }
}

function playPredefinedSound() {
  enqueueSound(audioSource);
}

document.getElementById("button").addEventListener("click", function() {
  playPredefinedSound();
});