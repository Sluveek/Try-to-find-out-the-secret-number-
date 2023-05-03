# Guess The Number Game

This is a simple web-based guessing game built with JavaScript. The game generates a random secret number between 1 and 20 and the player needs to guess the number. After each guess, the game provides feedback to the player whether their guess was too high or too low. The game ends when the player correctly guesses the secret number or runs out of guesses.

## How to Play

1. Open the `index.html` file in your web browser.
2. Enter a number between 1 and 20 in the input field.
3. Click the "Check" button to make a guess.
4. The game will provide feedback whether the guess was too high, too low, or correct.
5. Keep guessing until you correctly guess the secret number or run out of guesses.
6. If you correctly guess the secret number, your score will be updated and your high score will be displayed.
7. Click the "Again" button to restart the game.

## Code Overview

The JavaScript code for the game is in the `script.js` file. Here's an overview of what each part of the code does:

- `secretNumber` - generates a random number between 1 and 20 which the player needs to guess.
- `score` - keeps track of the player's current score, which starts at 20 and decreases with each incorrect guess.
- `highscore` - keeps track of the player's highest score achieved.
- `showText` - a helper function that updates the text content of the `.message` element.
- `document.querySelector('.check').addEventListener` - listens for the click event on the "Check" button and performs the game logic.
- `document.querySelector('.again').addEventListener` - listens for the click event on the "Again" button and resets the game.
- `if (!guess)` - handles the case when the player submits an empty guess.
- `else if (guess === secretNumber)` - handles the case when the player correctly guesses the secret number.
- `else if (guess !== secretNumber)` - handles the case when the player incorrectly guesses the secret number.
- `if (score > highscore)` - updates the high score if the player's current score is higher than the previous high score.
- `document.querySelector('body').style.backgroundColor` and `document.querySelector('.number').style.width` - updates the background color and width of the `.number` element depending on the game outcome.

## Dependencies

This game does not have any external dependencies and can be played directly in a web browser.