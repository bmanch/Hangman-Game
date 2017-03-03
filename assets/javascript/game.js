var wordBank = {
	w1: ["G", "I", "G", "L", "E"],
	w2: ["W", "A", "T", "E", "R", "W", "O", "R", "L", "D"]
}

var wordBankIndex = 0;

var wordBankArray = [wordBank.w1, wordBank.w2];

var currentWord = [];

var blankWord = [];

var theWord = document.getElementById("theWord");

var guesses = 0;

function activeWord () {
	if (wordBankIndex <= (wordBankArray.length - 1)) {
		currentWord = wordBankArray[wordBankIndex];
		if (currentWord = wordBank.w1) {
			blankWord = [["_ "], ["_ "], ["_ "], ["_ "], ["_ "]];
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
		}
	}

	else {
		alert("We're out of words! That's all the bad movies and actors from all time! Thanks for playing!");
	}
}
activeWord ();
console.log(currentWord);
console.log(blankWord);

if (currentWord === wordBank.w1) {
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		if (userGuess === currentWord[0]) {
			blankWord[0] = event.key.toUpperCase();
			blankWord[2] = event.key.toUpperCase();
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
		}

		else if (userGuess === currentWord[1]) {
			blankWord[1] = event.key.toUpperCase();
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
		}

		else if (userGuess === currentWord[3]) {
			blankWord[3] = event.key.toUpperCase();
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
		}

		else if (userGuess === currentWord[4]) {
			blankWord[4] = event.key.toUpperCase();
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
		}
	}

}

console.log(blankWord);