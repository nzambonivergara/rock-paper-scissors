// game rules
// paper > rock > scissors
// scissors > paper > rock
// rock > scissors > paper

// GLOBAL VARIABLES
// var classicOptions = [ 'rock', 'paper', 'scissors' ];
// var difficultOptions = [ 'rock', 'paper', 'scissors', 'lizard', 'alien' ];
var humanPlayer =  new Player('Human', '🙆🏽');
var computerPlayer = new Player('Computer', '👩🏻‍💻');
var currentGame = new Game (humanPlayer, computerPlayer);

// QUERY SELECTORS
var classicGameOptions = document.querySelectorAll('.js-game-options-classic');
var gameLevelsSection = document.getElementById('gameLevelsSection');
var difficultLevelSelection = document.getElementById('difficultBoard');
var gamePlayground = document.getElementById('gamePlayground');


// EVENT LISTENERS
// for (var i = 0; i < classicGameOptions.length; i++) {
//   classicGameOptions[i].addEventListener('click', function(event) {
//     checkChoice(event);
//   });
// }

gameLevelsSection.addEventListener('click', function(event) {
  chooseLevel(event);
});
gamePlayground.addEventListener('click', checkChoice)

// FUNCTIONS

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function chooseLevel(event) {
  if (event.target.parentNode.classList.contains('game-level-container')) {
    hide(gameLevelsSection);
    show(gamePlayground);
  }

  if (event.target.parentNode.id === 'classicGameOption') {
    currentGame.updateGameLevel('classic')
    hide(difficultLevelSelection);
  } else if (event.target.parentNode.id === 'difficultGameOption') {
    currentGame.updateGameLevel('difficult')
    show(difficultLevelSelection);
  }
}

function checkChoice() {
  if (event.target.classList.contains('game-options')) {
    humanPlayer.takeTurn()
    computerPlayer.takeTurn(currentGame.fighters);
    currentGame.updateScore();
    // console.log("human: ", humanPlayer.currentChoice);
    // console.log("computer: ", computerPlayer.currentChoice);
    return currentGame.checkWinner();
  }

};


// function checkWinner() {
//   if (humanPlayer.currentChoice === computerPlayer.currentChoice) {
//       return `😭 It's a draw! 😭`;
//   } else if ((humanPlayer.currentChoice === 'rock' && computerPlayer.currentChoice === 'scissors') ||
//              (humanPlayer.currentChoice === 'paper' && computerPlayer.currentChoice === 'rock') ||
//              (humanPlayer.currentChoice === 'scissors' && computerPlayer.currentChoice === 'paper')) {
//         return humanWins();
//   } else if ((computerPlayer.currentChoice === 'rock' && humanPlayer.currentChoice === 'scissors') ||
//              (computerPlayer.currentChoice === 'paper' && humanPlayer.currentChoice === 'rock') ||
//              (computerPlayer.currentChoice === 'scissors' && humanPlayer.currentChoice === 'paper')) {
//         return computerWins();
//   }
// }
//
// function humanWins() {
//   humanPlayer.saveWinsToStorage();
//   // console.log(currentGame);
//   return `${humanPlayer.token} ${humanPlayer.name} won this time around! ${humanPlayer.token}`;
// }
//
// function computerWins() {
//   console.log(currentGame);
//   computerPlayer.saveWinsToStorage();
//   return `${computerPlayer.token} ${computerPlayer.name} won this time around! ${computerPlayer.token}`;
// }
