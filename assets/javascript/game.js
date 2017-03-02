var wordBank = {
	w1: ["C", "A", "G", "E"],
	w2: ["G", "I", "G", "L", "E"]
}

var wordBankIndex = 0;

var wordBankArray = [wordBank.w1, wordBank.w2];

var currentWord = [];

var blankWord = [];

var theWord = document.getElementById("theWord");

function activeWord () {
	if (wordBankIndex <= (wordBankArray.length - 1)) {
		currentWord = wordBankArray[wordBankIndex];
	}

	else {
		alert("We're out of words! That's all the bad movies and actors from all time! Thanks for playing!");
	}
}
activeWord ();
console.log(currentWord);
console.log(blankWord);

if (currentWord === wordBank.w1) {
	blankWord = ["_ ", "_ ", "_ ", "_"];
	theWord.textContent = blankWord;

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		if (userGuess === currentWord[0]) {
			blankWord[0] = event.key;
			theWord.textContent = blankWord;
		}

		else if (userGuess === currentWord[1]) {
			blankWord[1] = event.key;
			theWord.textContent = blankWord;
		}

		else if (userGuess === currentWord[2]) {
			blankWord[2] = event.key;
			theWord.textContent = blankWord;
		}

		else if (userGuess === currentWord[3]) {
			blankWord[3] = event.key;
			theWord.textContent = blankWord;
		}
	}

}

console.log(blankWord);