var randomNumber1 = Math.round(Math.random() * 5 + 1);
var randomNumber2 = Math.round(Math.random() * 5 + 1);

var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");

player1.setAttribute("src", "images/dice" + randomNumber1 +".png");
player2.setAttribute("src", "images/dice" + randomNumber2 +".png");

var titleText = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
  titleText.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
  titleText.textContent = "Player 2 Wins! 🚩";
} else {
  titleText.textContent = "Draw!"
}
