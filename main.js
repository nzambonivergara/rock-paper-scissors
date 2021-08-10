// GLOBAL VARIABLES
var humanPlayer =  new Player('Human', '🙆🏽');
var computerPlayer = new Player('Computer', '👩🏻‍💻');
var currentGame = new Game (humanPlayer, computerPlayer);
var countdown;

// QUERY SELECTORS
var gamePlayground = document.getElementById('gamePlayground');
var gameInstructionText = document.getElementById('gameInstructionText');
var gameFighters = document.querySelectorAll('.game-fighters');
var gameLevelsSection = document.getElementById('gameLevelsSection');
var difficultLevelSelection = document.getElementById('difficultBoard');
var humanScore = document.getElementById('humanScore');
var computerScore = document.getElementById('computerScore');
var resultDashboardContainer = document.getElementById('resultDashboardContainer');
var humanResultDashboard = document.getElementById('humanResultDashboard');
var computerResultDashboard = document.getElementById('computerResultDashboard');
var changeGameButton = document.getElementById('changeGameButton');
var resetScoreButton = document.getElementById('resetScoreButton');

// EVENT LISTENERS
window.addEventListener('load', updateScores);
gameLevelsSection.addEventListener('click', chooseLevel);
gamePlayground.addEventListener('click', checkFighterChoice);
changeGameButton.addEventListener('click', showGameLevelsScreen);
resetScoreButton.addEventListener('click', resetPlayerScores);

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
    showChooseFighterScreen(event.target.parentNode.id);
  }
}

function showChooseFighterScreen(level) {
  show(gamePlayground);
  show(changeGameButton);
  hide(resultDashboardContainer);
  showGameFighters();
  gameInstructionText.innerText = 'Choose your fighter!';
  humanResultDashboard.innerHTML = '';
  computerResultDashboard.innerHTML = '';
  if (level === 'classicGameOption') {
    currentGame.updateGameLevel('classic')
    hide(difficultLevelSelection);
  } else if (level === 'difficultGameOption') {
    currentGame.updateGameLevel('difficult')
    show(difficultLevelSelection);
  }
}

function showGameFighters() {
  for (var i = 0; i < gameFighters.length; i++) {
    show(gameFighters[i]);
  }
}

function checkFighterChoice() {
  if (event.target.classList.contains('game-fighters')) {
    humanPlayer.takeTurn(event.target.id)
    computerPlayer.takeTurn(currentGame.fighters);
    displayResultWithTimer();
    show(resetScoreButton);
  }
};

function showResult(winnerMessage) {
  gameInstructionText.innerText = winnerMessage;
  updateScores();
  hide(gamePlayground);
  show(resultDashboardContainer);
  showPlayerFighterChoice();
};

function updateScores() {
  humanScore.innerText = humanPlayer.wins;
  computerScore.innerText = computerPlayer.wins;
  if (humanPlayer.wins || computerPlayer.wins) {
    show(resetScoreButton);
  }
}

function showPlayerFighterChoice() {
  for (var i = 0; i < gameFighters.length; i++) {
    if ((humanPlayer.currentChoice === computerPlayer.currentChoice) && (gameFighters[i].id === humanPlayer.currentChoice)) {
      humanResultDashboard.innerHTML = `${gameFighters[i].outerHTML}`;
      computerResultDashboard.innerHTML = `${gameFighters[i].outerHTML}`;
    } else if (gameFighters[i].id === humanPlayer.currentChoice) {
      humanResultDashboard.innerHTML = `${gameFighters[i].outerHTML}`;
    } else if (gameFighters[i].id === computerPlayer.currentChoice) {
      computerResultDashboard.innerHTML = `${gameFighters[i].outerHTML}`;
    }
  }
  humanResultDashboard.classList.add('game-fighters-disable');
  computerResultDashboard.classList.add('game-fighters-disable');
};


function displayResultWithTimer() {
  var winnerMessage = currentGame.checkWinner()
  var seconds = 3;
  countdown = setInterval(function() {
    seconds--;
    if (!seconds) {
      clearInterval(countdown);
      showChooseFighterScreen(currentGame.gameLevel);
    } else {
      showResult(winnerMessage);
    }
  }, 1000);
};

function showGameLevelsScreen() {
  clearTimeout(countdown);
  hide(resultDashboardContainer);
  hide(changeGameButton);
  show(gameLevelsSection);
  hide(gamePlayground);
  gameInstructionText.innerText = 'Choose your game!'
};

function resetPlayerScores() {
  currentGame.resetScore();
  updateScores();
  hide(resetScoreButton);
}
