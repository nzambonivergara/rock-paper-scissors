

var classicOptions = [ 'rock', 'paper', 'scissors' ];
var difficultOptions = [ 'rock', 'paper', 'scissors', 'lizard', 'alien' ];

// game rules
// paper > rock > scissors
// scissors > paper > rock
// rock > scissors > paper

var humanPlayer =  new Player('Human', '🙆🏽');
var computerPlayer = new Player('Computer', '👩🏻‍💻');
var currentGame = new Game (humanPlayer, computerPlayer);

var classicGameOptions = document.querySelectorAll('.js-game_options_classic');

for (var i = 0; i < classicGameOptions.length; i++) {
  classicGameOptions[i].addEventListener('click', function(event) {
    checkChoice(event);
      console.log(event);
  });
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function checkChoice(event) {
  humanPlayer.currentChoice = event.target.id;
  computerPlayer.currentChoice = classicGameOptions[getRandomIndex(classicGameOptions)].id;
}
