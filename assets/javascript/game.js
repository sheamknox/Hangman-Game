//Create array of planets to choose from for the current word to be guessed
var planets = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"];

//Create variable to hold number of wrong guesses left
var wrongGuess = 5;

//Create a variable to hold the wrong letters guessed
var wrongLetters = [];

//Choose a random word
var currentWord = planets[Math.floor(Math.random() * planets.length)];

//Display a "_" for each letter in the word to be guessed
var blanks = [];
function createBlanks(){
	for(i=0; i < currentWord.length; i++){
	blanks[i] = " _ ";
	} 
document.getElementById("currentPlanet").innerHTML = blanks.join("");
}

// var flag = 0;
// 	function flagRaiser(){
//     flag += 1;
// };

createBlanks();

//Create event listener to bring in user's key selection
document.onkeyup = function(event) {
	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();

	

	// flagRaiser();
	//Compare user's key press with letters in the current word
	//If the user's key matches a letter, replace the corresponding "_" with that letter
	for(i=0; i < currentWord.length; i++){
		if (userGuess === currentWord[i]) {
			blanks[i] = userGuess; 
			document.getElementById("currentPlanet").innerHTML = blanks.join("");
		} 
	};

	if (currentWord.indexOf(userGuess) === -1) {
		wrongLetters += userGuess;
		document.getElementById("wrongLetters").innerHTML = "Wrong Letters Guessed: " + wrongLetters;
		document.getElementById("wrongGuess").innerHTML = "Wrong Guesses Left: " + (5 - wrongLetters.length);
	};
	
	
	
	if (wrongLetters.length >= 5) {
		alert("Game Over! You ran out of guesses! Press OK to play again.");
		location.reload();


	
	};


if (blanks.indexOf(" _ ") === -1){
		alert("Great Job! You guessed the planet!  Press OK to play again.");
		location.reload();
	};


//Update the number of guesses

//If user guesses wrong update the list of used letters that were incorrect
}
//After user wins/loses, choose new word and restart the game
// location.reload();