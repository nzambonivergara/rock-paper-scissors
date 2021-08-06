class Game {
  constructor(player1, player2, gameLevel) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameLevel = gameLevel;
    this.player1Score = player1.wins;
    this.player2Score = player2.wins;
    this.fighters = [];

  }

  updateScore() {
    this.player1Score = this.player1.wins;
    this.player2Score = this.player2.wins;
  }

  updateGameLevel(gameLevel) {
    this.gameLevel = gameLevel;
    if (this.gameLevel === 'classic') {
      this.fighters = [ 'rock', 'paper', 'scissors' ];
    } else {
      this.fighters = [ 'rock', 'paper', 'scissors', 'lizard', 'alien' ];
    }
  }

  checkWinner() {
    if (this.player1.currentChoice === this.player2.currentChoice) {
        console.log(`😭 It's a draw! 😭`);
    } else if ((this.player1.currentChoice === 'rock' && this.player2.currentChoice === 'scissors') ||
               (this.player1.currentChoice === 'paper' && this.player2.currentChoice === 'rock') ||
               (this.player1.currentChoice === 'scissors' && this.player2.currentChoice === 'paper')) {
        return this.player1.saveWinsToStorage();
    } else if ((this.player2.currentChoice === 'rock' && this.player1.currentChoice === 'scissors') ||
               (this.player2.currentChoice === 'paper' && this.player1.currentChoice === 'rock') ||
               (this.player2.currentChoice === 'scissors' && this.player1.currentChoice === 'paper')) {
        return this.player2.saveWinsToStorage();
    }
    this.updateScore();
  }

}
