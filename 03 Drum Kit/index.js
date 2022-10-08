
// Detecting button clicked
var buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

// Button click callback function
function handleClick() {
  playAudio(this.textContent);
  this.style.color = "#fff";
  buttonAnimation(this.textContent);
}

// Detecting key pressed
document.addEventListener("keydown", handleKeydown);

// Keyboard keydown callback function
function handleKeydown(event) {
  console.log(event);
  playAudio(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
}

/**
 * Play a specific audio file based  on the letter
 * @param {The corresponding button letter} letter 
 */
function playAudio(letter) {
  var audio = new Audio();

  if (letter === "w")
    audio.setAttribute("src", "sounds/crash.mp3");
  else if (letter === "a")
    audio.setAttribute("src", "sounds/kick-bass.mp3");
  else if (letter === "s")
    audio.setAttribute("src", "sounds/snare.mp3");
  else if (letter === "d")
    audio.setAttribute("src", "sounds/tom-1.mp3");
  else if (letter === "j")
    audio.setAttribute("src", "sounds/tom-2.mp3");
  else if (letter === "k")
    audio.setAttribute("src", "sounds/tom-3.mp3");
  else if (letter === "l")
    audio.setAttribute("src", "sounds/tom-4.mp3");

  audio.play();
}

function buttonAnimation(keyPressed) {
  var buttonPressed = document.querySelector("." + keyPressed.toLowerCase());

  buttonPressed.classList.add("pressed");
}