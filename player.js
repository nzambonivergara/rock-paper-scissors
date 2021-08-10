class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = this.retrieveWinsFromStorage() || 0;
    this.currentChoice;
  }

  addWin() {
    this.wins++;
    this.saveWinsToStorage();
    return `${this.token} ${this.name} won this time around! ${this.token}`;
  }

  saveWinsToStorage() {
    localStorage.setItem(`Player: ${this.name}`, this.wins);
  }

  retrieveWinsFromStorage() {
    return JSON.parse(localStorage.getItem(`Player: ${this.name}`));
  }

  resetWinsFromStorage() {
    this.wins = 0;
    this.saveWinsToStorage();
  }

  takeTurn(gameChoices) {
    if (this.name === 'Human') {
      this.currentChoice = gameChoices;
    } else {
      this.currentChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    }
  }
}
