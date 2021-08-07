// GLOBAL VARIABLES
var humanPlayer =  new Player('Human', '🙆🏽');
var computerPlayer = new Player('Computer', '👩🏻‍💻');
var currentGame = new Game (humanPlayer, computerPlayer);

// QUERY SELECTORS
var gameOptions = document.querySelectorAll('.game-options');
var gameLevelsSection = document.getElementById('gameLevelsSection');
var difficultLevelSelection = document.getElementById('difficultBoard');
var gamePlayground = document.getElementById('gamePlayground');
var gameInstructionText = document.getElementById('gameInstructionText');
var humanScore = document.getElementById('humanScore');
var computerScore = document.getElementById('computerScore');
var resultDashboard = document.getElementById('resultDashboard');
var changeGameButton = document.getElementById('changeGameButton');

gameLevelsSection.addEventListener('click', chooseLevel);
gamePlayground.addEventListener('click', checkChoice)

// FUNCTIONS

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function chooseLevel() {
  if (event.target.parentNode.classList.contains('game-level-container')) {
    hide(gameLevelsSection);
    // gameInstructionText.innerText = 'Choose your fighter!'
    showLevel(event.target.parentNode.id);
  }
}

function showLevel(level) {
  show(gamePlayground);
  show(changeGameButton);
  gameInstructionText.innerText = 'Choose your fighter!';
  resultDashboard.innerHTML = '';
  for (var i = 0; i < gameOptions.length; i++) {
    show(gameOptions[i]);
  }
  if (level === 'classicGameOption') {
    currentGame.updateGameLevel('classic')
    hide(difficultLevelSelection);
  } else if (level === 'difficultGameOption') {
    currentGame.updateGameLevel('difficult')
    show(difficultLevelSelection);
  }
}

function checkChoice() {
  if (event.target.classList.contains('game-options')) {
    humanPlayer.takeTurn(event.target.id)
    computerPlayer.takeTurn(currentGame.fighters);
    // currentGame.updateScore();
   resultTimer();
  }
};

function showResult(winnerMessage) {
  gameInstructionText.innerText = winnerMessage;
  humanScore.innerText = humanPlayer.wins;
  computerScore.innerText = computerPlayer.wins;
  for (var i = 0; i < gameOptions.length; i++) {
    if (gameOptions[i].id !== currentGame.player1.currentChoice && gameOptions[i].id !== currentGame.player2.currentChoice) {
      hide(gameOptions[i]);
    } else {
      show(gameOptions[i]);
    }
  }

}

function resultTimer() {
  var winnerMessage = currentGame.checkWinner()
  var seconds = 3;
  var countdown = setInterval(function() {
    seconds--;
    if (!seconds) {
      clearInterval(countdown);
      showLevel(currentGame.gameLevel);
    } else {
      showResult(winnerMessage);
    }
  }, 1000);
}
