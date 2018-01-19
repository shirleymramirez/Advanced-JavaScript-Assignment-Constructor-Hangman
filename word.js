var Letter = require('./letter.js');

var Word = function(charWord) {
    this.charWord = charWord;

    // will hold all the letters
    this.letChar = [];

    this.found = false;

    // get letter function
    this.getLetter = function() {
        for (var i = 0; i < this.charWord.length; i++) {
            this.letChar.push(new Letter(this.charWord[i]));
        }
    }

    // check word function
    this.foundWord = function() {
        this.found = this.letChar.every(function(currentLetter) {
            return currentLetter.appear;
        })
        this.found = true;
        return true;
    }

    // check if letter found
    this.checkLetterFound = function(guessedLetter) {

    }

}

module.exports = Word;