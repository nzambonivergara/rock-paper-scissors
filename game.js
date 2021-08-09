class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameLevel;
    this.fighters = [];
  }

  updateScore() {
    
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
        return `😭 It's a draw! 😭`;
    } else if ((this.player1.currentChoice === 'rock' && this.player2.currentChoice === 'scissors') ||
               (this.player1.currentChoice === 'rock' && this.player2.currentChoice === 'lizard') ||
               (this.player1.currentChoice === 'paper' && this.player2.currentChoice === 'rock') ||
               (this.player1.currentChoice === 'paper' && this.player2.currentChoice === 'alien') ||
               (this.player1.currentChoice === 'scissors' && this.player2.currentChoice === 'paper') ||
               (this.player1.currentChoice === 'scissors' && this.player2.currentChoice === 'lizard') ||
               (this.player1.currentChoice === 'lizard' && this.player2.currentChoice === 'paper') ||
               (this.player1.currentChoice === 'lizard' && this.player2.currentChoice === 'alien') ||
               (this.player1.currentChoice === 'alien' && this.player2.currentChoice === 'scissors') ||
               (this.player1.currentChoice === 'alien' && this.player2.currentChoice === 'rock')) {
        return this.player1.addWin();
    } else {
        return this.player2.addWin();
    }
  }
}
