console.log("welcome");

let audioElement = new Audio("faded-26141.mp3");
//audioElement.play();
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let progress = document.getElementById("progress");

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime == 0) {
    audioElement.play();
    masterPlay.innerText = "pause_circle";
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.innerText = "play_circle";
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  let audioprogress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  progress.value = audioprogress;
});

progress.addEventListener("change", () => {
  audioElement.currentTime = (progress.value * audioElement.duration) / 100;
});
