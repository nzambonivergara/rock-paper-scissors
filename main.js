// GLOBAL VARIABLES
var humanPlayer =  new Player('Human', '🙆🏽');
var computerPlayer = new Player('Computer', '👩🏻‍💻');
var currentGame = new Game (humanPlayer, computerPlayer);
var countdown;

// QUERY SELECTORS
var gamePlayground = document.getElementById('gamePlayground');
var gameInstructionText = document.getElementById('gameInstructionText');
var gameLevelsSection = document.getElementById('gameLevelsSection');
var difficultLevelSelection = document.getElementById('difficultBoard');
var humanScore = document.getElementById('humanScore');
var computerScore = document.getElementById('computerScore');
var resultDashboardContainer =
document.getElementById('resultDashboardContainer');
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
}

function hide(element) {
  element.classList.add('hidden');
}

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
  gameInstructionText.innerText = 'Choose your fighter!';
  if (level === 'classicGameOption') {
    currentGame.updateGameLevel('classic')
    hide(difficultLevelSelection);
  } else if (level === 'difficultGameOption') {
    currentGame.updateGameLevel('difficult')
    show(difficultLevelSelection);
  }
}

function checkFighterChoice() {
  if (event.target.classList.contains('game-fighters')) {
    humanPlayer.takeTurn(event.target.id)
    computerPlayer.takeTurn(currentGame.fighters);
    showResult();
    show(resetScoreButton);
    countdown = setTimeout(function () {
      showChooseFighterScreen(currentGame.gameLevel)
    }, 2 * 1000);
  }
}

function showResult() {
  gameInstructionText.innerText = currentGame.checkWinner();
  updateScores();
  hide(gamePlayground);
  show(resultDashboardContainer);
  showPlayerFighterChoice();
}

function updateScores() {
  humanScore.innerText = humanPlayer.wins;
  computerScore.innerText = computerPlayer.wins;
  if (humanPlayer.wins || computerPlayer.wins) {
    show(resetScoreButton);
  }
}

function showPlayerFighterChoice() {
  var humanPlayerChoice =
  document.getElementById(`${humanPlayer.currentChoice}`);
  var computerPlayerChoice =
  document.getElementById(`${computerPlayer.currentChoice}`);
  resultDashboardContainer.innerHTML = '';
  resultDashboardContainer.append(
    humanPlayerChoice.cloneNode(), computerPlayerChoice.cloneNode()
  );
  resultDashboardContainer.classList.add('game-fighters-disable');
}

function showGameLevelsScreen() {
  clearTimeout(countdown);
  hide(resultDashboardContainer);
  hide(changeGameButton);
  show(gameLevelsSection);
  hide(gamePlayground);
  gameInstructionText.innerText = 'Choose your game!'
}

function resetPlayerScores() {
  currentGame.resetScore();
  updateScores();
  hide(resetScoreButton);
}
