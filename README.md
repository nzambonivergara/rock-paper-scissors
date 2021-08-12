# Rock, Paper, Scissors Overview

This Rock, Paper, Scissors game, allows the user to play a classic or difficult game of roshambo. It was built utilizing HTML, CSS, and JavaScript. The game data persists upon page load utilizing localStorage.

## Installation

Rock, Paper, Scissors requires no installation. All features are contained within the web app, which leverages local storage to keep track of the user's activities across visits.

[Click here to access Rock, Paper, Scissors.](https://github.com/nzambonivergara/rock-paper-scissors)

## Usage and Demonstration

**How to play Rock, Paper, Scissors:**

- Choose the game level you want to play: classic or difficult.
  - Choose your fighter and play against the computer player!
  - A screen with your choice, the computer choice and the winner will briefly appear.
  - The score will get updated.
- Click the change game button to choose a different level.
  - The score for each player will persist, even after page load.
- The user can reset the score at any point by clicking the reset score button.

![Rock Paper Scissors in Action](https://user-images.githubusercontent.com/83611094/128779181-a9eb40c5-9fff-4a1e-a097-60d4b98384ca.gif)

![Score reset](https://user-images.githubusercontent.com/83611094/128955359-ddbc5c9e-9ec4-4c13-b9b3-295046f55f56.gif)


## Programming Languages and Dependencies

**This app was developed using:**

- HTML
- CSS
- JavaScript
  - Local Storage

## Code Architecture

The application consists of one HTML page, a CSS file, and three JavaScript files:

1. A player.js file that contains a Player class.
Player methods include:
    - constructor with the following properties: name (ex: 'Human'), token (ex: '🙆'), wins (ex: 0), and currentChoice (ex: 'rock');
    - addWins
    - saveWinsToStorage
    - retrieveWinsFromStorage
    - takeTurn

1. A game.js file that contains a Game class. Game methods include:
    - constructor with the following properties: player1, player2, gameLevel (ex: 'classic'), and fighters (ex: ['rock', 'paper', 'scissors']).
    - updateGameLevel
    - checkWinner
    - resetScore

1. A main.js file that contains all DOM related JavaScript.

## Challenges & Wins

Building this game from scratch required breaking down the problem step by step as well as careful planning and problem solving. As a new developer, implementing localStorage and ensuring the code was DRY and adhered to the Single Responsibility Principle was an interesting challenge.

## Contributions

_This app was developed by:_

- [Natalia Zamboni Vergara](https://github.com/nzambonivergara)

_Natalia is a student of front-end engineering at the Turing School of Software & Design._

Project spec and assets provided by the [Turing School of Software & Design](https://turing.edu/).
