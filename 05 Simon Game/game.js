var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;
var randomNumber;
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

function playSequence() {
  nextSequence();
  for (let index = 0; index < gamePattern.length; index++) {
    const color = gamePattern[index];
    setTimeout(() => {
      flashButton(color);                   
      playSound(color);
    }, 500 * index);
  }
}

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);     // Get a random number from 0 to 3
  console.log(randomNumber);                        
  randomChosenColor = buttonColors[randomNumber];   // Get a the color from the array   
  gamePattern.push(randomChosenColor);              // Add the color to the game pattern
  // flashButton(randomChosenColor);                   
  // playSound(randomChosenColor); 
  $('#level-title').text("Level " + level);                   // Update the level text
  level++;                                          // Increase the level for the next round
}

function checkAnswer(currentLevel) {
  var userAnswer = userClickedPattern[currentLevel];
  var expectedAnswer = gamePattern[currentLevel];

  console.log("User: " + userClickedPattern[currentLevel] + " | Game: " + gamePattern[currentLevel]);
  if (userAnswer == expectedAnswer) {
    console.log("Success");
    return true;
  }
  else {
    console.log("Wrong");
    gameOver();
    return false;
  }
}

function playSound(name) {
  var audio = new Audio();                                // Create a new audio object
  audio.setAttribute("src", "sounds/" + name + ".mp3");   // Set the audio source
  audio.play();                                           // Play the audio
}

function flashButton(button) {
  $('#' + button).fadeOut(100).fadeIn(100);
}

$(".btn").click(function() {
  if (gameStarted == false) return;               // Ignore clicks if game has not started

  var userChosenColor = $(this).attr("id");       // Select the clicked button
  animatePress(userChosenColor);
  playSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  var userAnswerIndex = userClickedPattern.length-1;
  var isCorrectAnswer = checkAnswer(userAnswerIndex);

  console.log("Level: " + level + " | userAnswerIndex: " + userClickedPattern.length);
  if (userClickedPattern.length == level && isCorrectAnswer) {
    setTimeout(() => {
      playSequence();
      userClickedPattern.length = 0;
    }, 1000);
  }
});

function animatePress(currentColor) {
  $('#' + currentColor).addClass("pressed");
  console.log("#" + currentColor);

  setTimeout(() => {
    $('#' + currentColor).removeClass("pressed");
  }, 100);
}

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    level = 0;
    playSequence();
  }
}

// Game over animation and actions
function gameOver() {
  $('body').addClass("game-over");        // Flash the screen in red
  // Remove class game-over after 200 ms 
  setTimeout(() => {
    $('body').removeClass("game-over");
  }, 200);

  playSound("wrong");

  $('h1').text("Game Over! Press any key to restart");
  gameStarted = false;
}

// Detect when a keyboard key is pressed
$(document).keypress(function() { 
  startGame();
});

$("h1").click(function () { 
  setTimeout(() => {
    startGame();
  }, 500);
});