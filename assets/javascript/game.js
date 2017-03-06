var wordBank = {
	w1: ["G", "I", "G", "L", "E"],
	w2: ["W", "A", "T", "E", "R", "W", "O", "R", "L", "D"],
	w3: ["N", "I", "C", "H", "O", "L", "A", "S", "C", "A", "G", "E"]
}

var wordBankIndex = 0;

var wordBankArray = [wordBank.w1, wordBank.w2, wordBank.w3];

var currentWord = [];

var blankWord = [];

var blankLetters = "";

var currentGuesses = [];

var theWord = document.getElementById("theWord");

var theGuessNumber = document.getElementById("numberOfGuesses");

var theCurrentScore = document.getElementById("score");

var userLetter = document.getElementById("letters");

var guesses = 10;

var currentWordScore = 0;

var score = 0;

var letterBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]

var letterAlreadyUsed = [];

function renderWord() {
	if (wordBankIndex <= (wordBankArray.length - 1)) {
		currentWord = wordBankArray[wordBankIndex];
		userLetter.textContent = "";

		//Word: GIGLE
		if (currentWord === wordBank.w1) {	
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}
			console.log(blankLetters);
			blankWord = blankLetters.split(",", 5);
			console.log(blankWord);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
			guesses = 10	
			theGuessNumber.textContent = guesses;
			
			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4])) {
					score++;
					theCurrentScore.textContent = score;
					wordBankIndex++;
					renderWord();
				}

				else {
					document.onkeyup = function(event) {

						var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

						if (userGuess === currentWord[0]) {
							blankWord[0] = event.key.toUpperCase();
							blankWord[2] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
							currentWordScore = currentWordScore + 2;
							console.log(currentWordScore);
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
							currentWordScore++;
							console.log(currentWordScore);
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
							currentWordScore++;
							console.log(currentWordScore);
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
							currentWordScore++;
							console.log(currentWordScore);
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								console.log(guesses);
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + ",";
								letterAlreadyUsed = letterAlreadyUsed.split(",");
								console.log(letterAlreadyUsed);
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		//Word: WATERWORLD
		else if (currentWord === wordBank.w2) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}
			console.log(blankLetters);
			blankWord = blankLetters.split(",", 10);
			console.log(blankWord);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
			guesses = 10	
			theGuessNumber.textContent = guesses;
			
			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6] + currentWord[7] + currentWord[8] + currentWord[9])) {
					score++;
					theCurrentScore.textContent = score;
					wordBankIndex++;
					renderWord();
				}

				else {
					document.onkeyup = function(event) {
						
						var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

						if (userGuess === currentWord[0]) {
							blankWord[0] = event.key.toUpperCase();
							blankWord[5] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							blankWord[7] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[6]) {
							blankWord[6] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[8]) {
							blankWord[8] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[9]) {
							blankWord[9] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								console.log(guesses);
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + ",";
								letterAlreadyUsed = letterAlreadyUsed.split(",");
								console.log(letterAlreadyUsed);
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		//Word: NICHOLASCAGE
		else if (currentWord === wordBank.w3) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}
			console.log(blankLetters);
			blankWord = blankLetters.split(",", 12);
			console.log(blankWord);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
			guesses = 10	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6] + currentWord[7] + currentWord[8] + currentWord[9] + currentWord[10] + currentWord[11])) {
					score++;
					theCurrentScore.textContent = score;
					wordBankIndex++;
					renderWord();
				}

				else {
					document.onkeyup = function(event) {
						
						var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

						if (userGuess === currentWord[0]) {
							blankWord[0] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							blankWord[8] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[5]) {
							blankWord[5] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[6]) {
							blankWord[6] = event.key.toUpperCase();
							blankWord[9] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[7]) {
							blankWord[7] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[10]) {
							blankWord[10] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if (userGuess === currentWord[11]) {
							blankWord[11] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								console.log(guesses);
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + ",";
								letterAlreadyUsed = letterAlreadyUsed.split(",");
								console.log(letterAlreadyUsed);
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}
	}

	else {
		alert("We're out of words! That's all the bad movies and actors from all time! Thanks for playing!");
	}

};

renderWord();



