class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.currentChoice;
  }

  saveWinsToStorage() {
    this.wins++;
    // this.retrieveWinsFromStorage()
    // update item from storage and save again
  }

  retrieveWinsFromStorage() {
    this.wins = 0;
    // getItem from storage
  }

  takeTurn() {
    // choose fighter
  }
}
