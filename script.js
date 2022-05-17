"use strict";

// *** Read more about DOM ***

/*
// textContent shows innerText
console.log(document.querySelector(".message").textContent);

// Changing the innerText
document.querySelector(".message").textContent = "Correct number 🥳";
console.log(document.querySelector(".message").textContent);

// Changing number? and score
document.querySelector(".number").textContent = 15;
document.querySelector(".score").textContent = 10;

// value is property of input tag
console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 24; // Setting value to 24
console.log(document.querySelector(".guess").value);
*/

// Add event listener for click, followed by even handler (a function which should execute on click event)
// addEventListener is event listener function, takes in 2 parameters.

// Generating a secret number and setting it
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;
let gameScore = document.querySelector(".score").textContent;

document.querySelector(".check").addEventListener("click", function () {
  const numberGuess = Number(document.querySelector(".guess").value);
  if (!numberGuess) {
    document.querySelector(".message").textContent = "🚫 Blank input";
  } else if (numberGuess > secretNumber) {
    if (gameScore > 1) {
      document.querySelector(".message").textContent = "📈 Guess is too high";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;
    } else {
      document.querySelector(".message").textContent = "😡 You lost the game";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;
    }
  } else if (numberGuess < secretNumber) {
    if (gameScore > 1) {
      document.querySelector(".message").textContent = "📉 Guess is too low";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;
    } else {
      document.querySelector(".message").textContent = "😡 You lost the game";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;
    }
  } else if (numberGuess === secretNumber) {
    document.querySelector(
      ".message"
    ).textContent = `🥳🎉🎊 You've won with score of ${gameScore}`;
  }
});
