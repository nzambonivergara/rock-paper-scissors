class Game {
  constructor(player1, player2, gameLevel) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameLevel = gameLevel;
    this.player1Score = player1.wins;
    this.player2Score = player2.wins;
  }

  updateScore() {

  }

  updateGameLevel(gameLevel) {
    this.gameLevel = gameLevel;
  }

  checkWinner(player1, player2) {
    if (player1.currentChoice > player2.currentChoice) {
      player1.saveWinsToStorage();
      return `${player1.token} ${player1.name} won this time around! ${player1.token}`;
    } else if (player2.currentChoice > player1.currentChoice) {
      player2.saveWinsToStorage();
      return `${player1.token} ${player1.name} won this time around! ${player1.token}`;
    } else {
      return `😭 It's a draw! 😭`;
    }
  }
}
