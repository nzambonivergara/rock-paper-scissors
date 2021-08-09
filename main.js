// GLOBAL VARIABLES
var humanPlayer =  new Player('Human', '🙆🏽');
var computerPlayer = new Player('Computer', '👩🏻‍💻');
var currentGame = new Game (humanPlayer, computerPlayer);

// QUERY SELECTORS
var gamePlayground = document.getElementById('gamePlayground');
var gameInstructionText = document.getElementById('gameInstructionText');
var gameOptions = document.querySelectorAll('.game-options');
var gameLevelsSection = document.getElementById('gameLevelsSection');
var difficultLevelSelection = document.getElementById('difficultBoard');
var humanScore = document.getElementById('humanScore');
var computerScore = document.getElementById('computerScore');
var resultDashboard = document.getElementById('resultDashboard');
var humanResultDashboard = document.getElementById('humanResultDashboard');
var computerResultDashboard = document.getElementById('computerResultDashboard');
var changeGameButton = document.getElementById('changeGameButton');

// EVENT LISTENERS
gameLevelsSection.addEventListener('click', chooseLevel);
gamePlayground.addEventListener('click', checkChoice);
changeGameButton.addEventListener('click', showGameChoice);

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
    showLevel(event.target.parentNode.id);
  }
}

function showLevel(level) {
  show(gamePlayground);
  show(changeGameButton);
  hide(resultDashboard);
  gameInstructionText.innerText = 'Choose your fighter!';
  humanResultDashboard.innerHTML = '';
  computerResultDashboard.innerHTML = '';
  showGameOptions();
  if (level === 'classicGameOption') {
    currentGame.updateGameLevel('classic')
    hide(difficultLevelSelection);
  } else if (level === 'difficultGameOption') {
    currentGame.updateGameLevel('difficult')
    show(difficultLevelSelection);
  }
}

function showGameOptions() {
  for (var i = 0; i < gameOptions.length; i++) {
    show(gameOptions[i]);
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

// function showResult(winnerMessage) {
//   gameInstructionText.innerText = winnerMessage;
//   humanScore.innerText = humanPlayer.wins;
//   computerScore.innerText = computerPlayer.wins;
//   for (var i = 0; i < gameOptions.length; i++) {
//     if ((currentGame.player1.currentChoice === currentGame.player2.currentChoice) && (gameOptions[i].id === currentGame.player1.currentChoice)) {
//       show(gameOptions[i]);
//       resultDashboard.insertAdjacentHTML('beforeend', gameOptions[i].outerHTML);
//     } else if (gameOptions[i].id !== currentGame.player1.currentChoice && gameOptions[i].id !== currentGame.player2.currentChoice) {
//       hide(gameOptions[i]);
//     } else {
//       show(gameOptions[i]);
//     }
//   }
//
// }

function showResult(winnerMessage) {
  gameInstructionText.innerText = winnerMessage;
  humanScore.innerText = humanPlayer.wins;
  computerScore.innerText = computerPlayer.wins;
  hide(gamePlayground);
  show(resultDashboard);
  for (var i = 0; i < gameOptions.length; i++) {
    if ((currentGame.player1.currentChoice === currentGame.player2.currentChoice) && (gameOptions[i].id === currentGame.player1.currentChoice)) {
      humanResultDashboard.innerHTML = `${gameOptions[i].outerHTML}`;
      computerResultDashboard.innerHTML = `${gameOptions[i].outerHTML}`;
    } else if (gameOptions[i].id === currentGame.player1.currentChoice) {
      humanResultDashboard.innerHTML = `${gameOptions[i].outerHTML}`;
    } else if (gameOptions[i].id === currentGame.player2.currentChoice) {
      computerResultDashboard.innerHTML = `${gameOptions[i].outerHTML}`;
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

function showGameChoice() {
  hide(changeGameButton);
  show(gameLevelsSection);
  hide(gamePlayground);
  gameInstructionText.innerText = 'Choose your game!'
}
