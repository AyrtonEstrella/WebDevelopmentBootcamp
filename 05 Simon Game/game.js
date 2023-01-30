var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var randomNumber;
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  flashButton(randomChosenColor);
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio();
  audio.setAttribute("src", "sounds/" + name + ".mp3");
  audio.play();
}

function flashButton(button) {
  $('#' + button).fadeOut(100).fadeIn(100);
}

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");       // Select the clicked button
  animatePress(userChosenColor);
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});

function animatePress(currentColor) {
  $('#' + currentColor).addClass("pressed");
  console.log("#" + currentColor);

  setTimeout(() => {
    $('#' + currentColor).removeClass("pressed");
  }, 100);
}