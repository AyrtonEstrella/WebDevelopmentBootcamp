var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1DiceName = "images/dice" + randomNumber1 + ".png";
var img2DiceName = "images/dice" + randomNumber2 + ".png";

console.log(img1DiceName);
console.log(img2DiceName);

document.querySelector(".img1").setAttribute("src", img1DiceName);
document.querySelector(".img2").setAttribute("src", img2DiceName);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "⭐️Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins!⭐️";
}
else {
  document.querySelector("h1").textContent = "It's a draw!";
}