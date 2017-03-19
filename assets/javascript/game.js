//Create array of planets to choose from for the current word to be guessed
var planets = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"];

//Create variable to hold number of wrong guesses left, initialized to 5
var wrongGuess = 5;

//Create an array variable to hold the wrong letters guessed
var wrongLetters = [];

//Choose a random word from the plaents array
var currentWord = planets[Math.floor(Math.random() * planets.length)];

//Create an array variable to hold the blanks to be displayed
var blanks = [];

//Create a function to populate the blanks array with the same amount of blanks as letters in the currentWord
function createBlanks(){
	for(i=0; i < currentWord.length; i++){
	blanks[i] = " _ ";
	} 
	//Push the contents of the array of blanks to the html and change the delimiter to spaces instead of the default ","
	document.getElementById("currentPlanet").innerHTML = blanks.join("");
}

//Call the createBlanks function
createBlanks();

//Create event listener to bring in user's key selection
document.onkeyup = function(event) {

	var userGuess = event.key;
	userGuess = userGuess.toUpperCase();


	//Compare user's key press with letters in the current word
	//If the user's key matches a letter, replace the corresponding "_" with that letter
	for(i=0; i < currentWord.length; i++){
		if (userGuess === currentWord[i]) {
			blanks[i] = userGuess; 
			document.getElementById("currentPlanet").innerHTML = blanks.join("");
		} 
	};

	//Check currentWord to see if it contains the user's guess 
	//and update the guess counter and letter's guessed in the html
	if (currentWord.indexOf(userGuess) === -1) {
		wrongLetters += userGuess;
		document.getElementById("wrongLetters").innerHTML = "Wrong Letters Guessed: " + wrongLetters;
		document.getElementById("wrongGuess").innerHTML = "Wrong Guesses Left: " + (5 - wrongLetters.length);
	};
	
	
	//Check to see if the user has 5 wrong guesses and alert the game is over if so
	if (wrongLetters.length >= 5) {
		alert("Game Over! You ran out of guesses! Press OK to play again.");
		location.reload();	
	};

	//If there are no more blanks left then alert the user that they guessed the word
	if (blanks.indexOf(" _ ") === -1){
		alert("Great Job! You guessed the planet!  Press OK to play again.");
		location.reload();
	};

};

