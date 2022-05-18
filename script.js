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

// Final project: Generating a secret number and setting it
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Score
let gameScore = document.querySelector(".score").textContent;

// Highscore
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const numberGuess = Number(document.querySelector(".guess").value);

  // No input provided
  if (!numberGuess) {
    document.querySelector(".message").textContent = "🚫 Blank input";

    // When guess number is greater than actual number
  } else if (numberGuess > secretNumber) {
    // When game score is still positive
    if (gameScore > 1) {
      document.querySelector(".message").textContent = "📈 Guess is too high";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;

      // User lost the game
    } else {
      document.querySelector(".message").textContent = "😡 You lost the game";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;
    }

    // Guessed number is lesser than actual number
  } else if (numberGuess < secretNumber) {
    // Game score is still positive
    if (gameScore > 1) {
      document.querySelector(".message").textContent = "📉 Guess is too low";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;

      // User lost the game
    } else {
      document.querySelector(".message").textContent = "😡 You lost the game";
      gameScore -= 1;
      document.querySelector(".score").textContent = gameScore;
    }

    // Guessed number is correct. User won.
  } else if (numberGuess === secretNumber) {
    document.querySelector(
      ".message"
    ).textContent = `🥳🎉🎊 You've won with score of ${gameScore}`;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    // Update "Highscore"
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

// Event listener and handler for game reset button "Again!"
document.querySelector(".again").addEventListener("click", function () {
  //Resetting to new secret number and score back to 20
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  gameScore = 20;
  // Resetting application back to initial stage
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
});
