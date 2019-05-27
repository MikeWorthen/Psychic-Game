
var keyChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins = 0;
var losses = 0;
var left = 9;
var letterUsed = [];
var randomLetter = randomLetter;


//COMPUTERS RANDOM LETTER
function random() {
randomLetter = keyChoices[Math.floor(Math.random() * keyChoices.length)];
console.log(randomLetter);

}

//PLAYERS INPUT
document.onkeyup = function (event) {
      var letterGuess = event.key;

      //CORRECT GUESSES
      if (letterGuess === randomLetter) {
            wins++;
            left = 9;
            letterUsed = [];

      }

      //INCORRECT GUESSES
      random();
      if (letterGuess !== randomLetter) {
            left--;

      }

      //RESET
      if (left == 0) {
            losses++;
            letterUsed = []
            left = 9;
      }

      //INCORRECT GUESSES - OUTPUT
      if (letterUsed.indexOf(letterGuess) >= 0) {

      } else {
            //DISPLAY INCORRECT LETTERS
            letterUsed.push(letterGuess);
            document.getElementById('soFar').innerHTML = letterUsed;
            console.log(letterUsed);

      }
     

      //OUTPUT TO DOM
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("left").innerHTML = "Guesses left: " + left;
}