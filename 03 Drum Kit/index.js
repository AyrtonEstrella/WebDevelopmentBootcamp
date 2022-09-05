var buttons = document.querySelectorAll(".drum");


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function handleClick() {
  console.log(this);
  var audio = new Audio();

  if (this.textContent === "w") 
    audio.setAttribute("src", "sounds/crash.mp3");
  else if (this.textContent === "a") 
    audio.setAttribute("src", "sounds/kick-bass.mp3");
  else if (this.textContent === "s") 
    audio.setAttribute("src", "sounds/snare.mp3");
  else if (this.textContent === "d") 
    audio.setAttribute("src", "sounds/tom-1.mp3");
  else if (this.textContent === "j") 
    audio.setAttribute("src", "sounds/tom-2.mp3");
  else if (this.textContent === "k") 
    audio.setAttribute("src", "sounds/tom-3.mp3");
  else if (this.textContent === "l") 
    audio.setAttribute("src", "sounds/tom-4.mp3");

  audio.play();
}