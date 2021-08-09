class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.currentChoice;
  }

  addWin() {
    this.wins++;
    return `${this.token} ${this.name} won this time around! ${this.token}`;
  }

  saveWinsToStorage() {
    // var stringifiedPlayer = JSON.stringify();
    // localStorage.setItem()
    // this.retrieveWinsFromStorage()
    // update item from storage and save again
  }

  retrieveWinsFromStorage() {
    this.wins = 0;
    // getItem from storage
  }

  takeTurn(gameChoices) {
    if (this.name === 'Human') {
      this.currentChoice = gameChoices;
    } else {
      this.currentChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    }
  }
}
