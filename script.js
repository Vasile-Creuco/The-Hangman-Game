let word;
let letters;
let remaining_tests = 6;
let number_trials_duplicate = 0;

function addWord() {
	word = document.getElementById("inputWord").value;
	document.getElementById("inputWord").value = '';
	document.getElementById("words").innerHTML += "The word was added!<br>";
	for (var i = 0; i < word.length; ++i) {
		if (i === 0 || i === word.length - 1) {
			document.getElementById("words").innerHTML += word[i];
		} else {
			document.getElementById("words").innerHTML += " _ ";
		}
	}
	document.getElementById("words").innerHTML += "<br>";
}

function addLetter() {
	letters = document.getElementById("inputLetter").value;
	document.getElementById("inputLetter").value = '';
	let number_trials = 0;
	for (var i = 0; i < word.length; ++i) {
		if (i != 0 && i != word.length - 1) {
			if (word[i] === letters[0]) {
				++number_trials;
				++number_trials_duplicate;
			}
		}
	}
	if (number_trials === 0) {
		--remaining_tests;
		window.alert("The word does not contain the letter '" + letters + "'");
	} else {
		window.alert("The letter '" + letters + "' is repeated " + number_trials + " in the word");
	}
	if (remaining_tests === 0) {
		document.getElementById("words").innerHTML += word;
		document.getElementById("words").innerHTML += "<br>" + "You lose";
	}
	if (number_trials_duplicate === word.length - 2 && remaining_tests != 0) {
		document.getElementById("words").innerHTML += word;
		document.getElementById("words").innerHTML += "<br>" + "You win";
	}
}
