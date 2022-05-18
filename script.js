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

/*
--- FINAL PROJECT ---
*/

// Generating a secret number and setting it
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = generateSecretNumber();

// Score
let gameScore = document.querySelector(".score").textContent;

// Highscore
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setGameScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const setBodyBgColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const setSecretNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

const setInputNumber = function (inputNumber) {
  document.querySelector(".guess").value = inputNumber;
};

const setSecretNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const setHighScore = function (highScore) {
  document.querySelector(".highscore").textContent = highScore;
};

document.querySelector(".check").addEventListener("click", function () {
  const numberGuess = Number(document.querySelector(".guess").value);

  // No input provided
  if (!numberGuess) {
    displayMessage("🚫 Blank input");

    // When number guessed is different than secret number
  } else if (numberGuess !== secretNumber) {
    if (gameScore > 1) {
      // Ternary operator to check if guess number is lesser or greater than secret number
      displayMessage(
        numberGuess > secretNumber ? "📈 Guess is too high" : "Guess is too low"
      );
      gameScore -= 1;
      setGameScore(gameScore);

      // User lost the game
    } else {
      displayMessage("😡 You lost the game");
      gameScore -= 1;
      setGameScore(gameScore);
    }

    // User won the game
  } else if (numberGuess === secretNumber) {
    displayMessage(`🥳🎉🎊 You've won with score of ${gameScore}`);
    setBodyBgColor("#60b347");
    setSecretNumberWidth("30rem");
    setSecretNumber(secretNumber);

    // Update "Highscore"
    if (gameScore > highScore) {
      highScore = gameScore;
      setHighScore(highScore);
    }
  }
});

// Event listener and handler for game reset button "Again!"
document.querySelector(".again").addEventListener("click", function () {
  //Resetting to new secret number and score back to 20
  secretNumber = generateSecretNumber();
  gameScore = 20;

  // Resetting application back to initial stage
  setSecretNumber("?");
  setSecretNumberWidth("15rem");
  setInputNumber("");
  displayMessage("Start guessing...");
  setGameScore("20");
  setBodyBgColor("#222");
});
