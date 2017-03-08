var wordBank = {
	w1: ["G", "I", "G", "L", "E"],
	w2: ["W", "A", "T", "E", "R", "W", "O", "R", "L", "D"],
	w3: ["N", "I", "C", "H", "O", "L", "A", "S", "C", "A", "G", "E"],
	w4: ["K", "E", "A", "N", "U", "R", "E", "E", "V", "E", "S"],
	w5: ["R", "U", "B", "B", "E", "R", "F", "A", "C", "E"],
	w6: ["T", "W", "I", "L", "I", "G", "H", "T"],
	w7: ["K", "R", "I", "S", "T", "E", "N", "S", "T", "E", "W", "A", "R", "T"],
	w8: ["H", "A", "Y", "D", "E", "N", "C", "H", "R", "I", "S", "T", "E", "N", "S", "E", "N"],
	w9: ["S", "H", "A", "R", "K", "N", "A", "D", "O"],
	w10: ["G", "L", "I", "T", "T", "E", "R"]
}

var wordBankIndex = 0;

var wordBankArray = [wordBank.w1, wordBank.w2, wordBank.w3, wordBank.w4, wordBank.w5, wordBank.w6, wordBank.w7, wordBank.w8, wordBank.w9, wordBank.w10];

var currentWord = [];

var blankWord = [];

var blankLetters = "";

var usedNumbers = [];

var theWord = document.getElementById("theWord");

var theGuessNumber = document.getElementById("numberOfGuesses");

var theCurrentScore = document.getElementById("score");

var userLetter = document.getElementById("letters");

var guesses = 12;

var score = 0;

var letterBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]

var letterAlreadyUsed = "";

function renderWord() {
	var randomNumber = Math.floor(Math.random() * 10);
	randomNumber = randomNumber.toString();
	userLetter.textContent = "";

	if ((randomNumber === usedNumbers[0]) || (randomNumber === usedNumbers[1]) || (randomNumber === usedNumbers[2]) || (randomNumber === usedNumbers[3]) || (randomNumber === usedNumbers[4]) || (randomNumber === usedNumbers[5]) || (randomNumber === usedNumbers[6]) || (randomNumber === usedNumbers[7]) || (randomNumber === usedNumbers[8]) || (randomNumber === usedNumbers[9]) || (randomNumber === usedNumbers[10]) || (randomNumber === usedNumbers[11])) {

		if (usedNumbers.length === 11) {
			theWord.textContent = "Well, that's all the words. To play again, just refresh the page.";
		}

		else {
			renderWord();
		}
	}
	
	else  {
		currentWord = wordBankArray[randomNumber];
		usedNumbers += randomNumber + ",";
		usedNumbers = usedNumbers.split(",");

		//Word: GIGLE
		if (currentWord === wordBank.w1) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}
			blankWord = blankLetters.split(",", 5);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			letterAlreadyUsed = "";
			
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
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
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
			blankWord = blankLetters.split(",", 10);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			letterAlreadyUsed = "";
			
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
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
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

			blankWord = blankLetters.split(",", 12);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


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
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		// word: KEANUREEVES
		else if (currentWord === wordBank.w4) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}

			blankWord = blankLetters.split(",", 11);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6] + currentWord[7] + currentWord[8] + currentWord[9] + currentWord[10])) {
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
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							blankWord[6] = event.key.toUpperCase();
							blankWord[7] = event.key.toUpperCase();
							blankWord[9] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if (userGuess === currentWord[5]) {
							blankWord[5] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if (userGuess === currentWord[8]) {
							blankWord[8] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if (userGuess === currentWord[10]) {
							blankWord[10] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		// word: RUBBERFACE
		else if (currentWord === wordBank.w5) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}

			blankWord = blankLetters.split(",", 10);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


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
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							blankWord[9] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[6]) {
							blankWord[6] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[7]) {
							blankWord[7] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if (userGuess === currentWord[8]) {
							blankWord[8] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		// word: TWILIGHT
		else if (currentWord === wordBank.w6) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}

			blankWord = blankLetters.split(",", 8);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6] + currentWord[7])) {
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
							blankWord[7] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							blankWord[4] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7];
							gamePlay();
						}

						else if (userGuess === currentWord[5]) {
							blankWord[5] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7];
							gamePlay();
						}

						else if (userGuess === currentWord[6]) {
							blankWord[6] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		// word: KRISTENSTEWART
		else if (currentWord === wordBank.w7) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}

			blankWord = blankLetters.split(",", 14);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6] + currentWord[7] + currentWord[8] + currentWord[9] + currentWord[10] + currentWord[11] + currentWord[12] + currentWord[13])) {
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
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							blankWord[12] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							blankWord[7] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							blankWord[8] = event.key.toUpperCase();
							blankWord[13] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[5]) {
							blankWord[5] = event.key.toUpperCase();
							blankWord[9] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[6]) {
							blankWord[6] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[10]) {
							blankWord[10] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if (userGuess === currentWord[11]) {
							blankWord[11] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		// word: HAYDENCHRISTENSEN
		else if (currentWord === wordBank.w8) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}

			blankWord = blankLetters.split(",", 17);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6] + currentWord[7] + currentWord[8] + currentWord[9] + currentWord[10] + currentWord[11] + currentWord[12] + currentWord[13] + currentWord[14] + currentWord[15] + currentWord[16])) {
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
							blankWord[7] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							blankWord[12] = event.key.toUpperCase();
							blankWord[15] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[5]) {
							blankWord[5] = event.key.toUpperCase();
							blankWord[13] = event.key.toUpperCase();
							blankWord[16] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[6]) {
							blankWord[6] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[8]) {
							blankWord[8] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[9]) {
							blankWord[9] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[10]) {
							blankWord[10] = event.key.toUpperCase();
							blankWord[14] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if (userGuess === currentWord[11]) {
							blankWord[11] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8] + blankWord[9] + blankWord[10] + blankWord[11] + blankWord[12] + blankWord[13] + blankWord[14] + blankWord[15] + blankWord[16];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		// word: SHARKNADO
		else if (currentWord === wordBank.w9) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}

			blankWord = blankLetters.split(",", 9);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6] + currentWord[7] + currentWord[8])) {
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
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							blankWord[6] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if (userGuess === currentWord[4]) {
							blankWord[4] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if (userGuess === currentWord[5]) {
							blankWord[5] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if (userGuess === currentWord[7]) {
							blankWord[7] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if (userGuess === currentWord[8]) {
							blankWord[8] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6] + blankWord[7] + blankWord[8];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
								userLetter.textContent = letterAlreadyUsed;
								gamePlay();
							}
						}
					};
				}
			};
			gamePlay();
		}

		// word: GLITTER
		else if (currentWord === wordBank.w10) {
			for (var i = 0; i < currentWord.length; i++) {
				blankLetters += "_ ,";
			}

			blankWord = blankLetters.split(",", 7);
			theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6];
			guesses = 12	
			theGuessNumber.textContent = guesses;
			userLetter.textContent = "";
			letterAlreadyUsed = "";


			function gamePlay () {
				if (guesses === 0) {
					wordBankIndex++;
					renderWord();
				}

				else if ((blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6]) === (currentWord[0] + currentWord[1] + currentWord[2] + currentWord[3] + currentWord[4] + currentWord[5] + currentWord[6])) {
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
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6];
							gamePlay();
						}

						else if (userGuess === currentWord[1]) {
							blankWord[1] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6];
							gamePlay();
						}

						else if (userGuess === currentWord[2]) {
							blankWord[2] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6];
							gamePlay();
						}

						else if (userGuess === currentWord[3]) {
							blankWord[3] = event.key.toUpperCase();
							blankWord[4] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6];
							gamePlay();
						}

						else if (userGuess === currentWord[5]) {
							blankWord[5] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6];
							gamePlay();
						}

						else if (userGuess === currentWord[6]) {
							blankWord[6] = event.key.toUpperCase();
							theWord.textContent = blankWord[0] + blankWord[1] + blankWord[2] + blankWord[3] + blankWord[4] + blankWord[5] + blankWord[6];
							gamePlay();
						}

						else if ((userGuess === letterBank[0]) || (userGuess === letterBank[1]) || (userGuess === letterBank[2]) || (userGuess === letterBank[3]) || (userGuess === letterBank[4]) || (userGuess === letterBank[5]) || (userGuess === letterBank[6]) || (userGuess === letterBank[7]) || (userGuess === letterBank[8]) || (userGuess === letterBank[9]) || (userGuess === letterBank[10]) || (userGuess === letterBank[11]) || (userGuess === letterBank[12]) || (userGuess === letterBank[13]) || (userGuess === letterBank[14]) || (userGuess === letterBank[15]) || (userGuess === letterBank[16]) || (userGuess === letterBank[17]) || (userGuess === letterBank[18]) || (userGuess === letterBank[19]) || (userGuess === letterBank[20]) || (userGuess === letterBank[21]) || (userGuess === letterBank[22]) || (userGuess === letterBank[23]) || (userGuess === letterBank[24]) || (userGuess === letterBank[25])) {
							
							if ((userGuess === letterAlreadyUsed[0]) || (userGuess === letterAlreadyUsed[1]) || (userGuess === letterAlreadyUsed[2]) || (userGuess === letterAlreadyUsed[3]) || (userGuess === letterAlreadyUsed[4]) || (userGuess === letterAlreadyUsed[5]) || (userGuess === letterAlreadyUsed[6]) || (userGuess === letterAlreadyUsed[7]) || (userGuess === letterAlreadyUsed[8]) || (userGuess === letterAlreadyUsed[9]) || (userGuess === letterAlreadyUsed[10]) || (userGuess === letterAlreadyUsed[11]) || (userGuess === letterAlreadyUsed[12]) || (userGuess === letterAlreadyUsed[13]) || (userGuess === letterAlreadyUsed[14]) || (userGuess === letterAlreadyUsed[15]) || (userGuess === letterAlreadyUsed[16]) || (userGuess === letterAlreadyUsed[17]) || (userGuess === letterAlreadyUsed[18]) || (userGuess === letterAlreadyUsed[19]) || (userGuess === letterAlreadyUsed[20]) || (userGuess === letterAlreadyUsed[21]) || (userGuess === letterAlreadyUsed[22]) || (userGuess === letterAlreadyUsed[23]) || (userGuess === letterAlreadyUsed[24]) || (userGuess === letterAlreadyUsed[25])) {
								gamePlay();
							}

							else {
								guesses--;
								theGuessNumber.textContent = guesses;
								letterAlreadyUsed += event.key.toUpperCase() + " ";
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
};

document.onkeyup = function(event) {
	renderWord();
}


