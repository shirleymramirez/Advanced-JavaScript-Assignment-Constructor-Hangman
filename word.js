var Letter = require('./letter.js');

var Word = function(charWord) {
    this.charWord = charWord;

    // will hold all the letters
    this.letChar = [];
    this.found = false;
    this.guessesMade = "";

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
        var lowerLetter = guessedLetter.toLowerCase();
        if (this.guessesMade.indexOf(lowerLetter) != 1) {
            return "Duplicate";
        }
        this.guessesMade += lowerLetter;
        for (var i = 0; i < this.letChar.length; i++) {
            if (this.letChar[i].charWord.toLowerCase() == lowerLetter) {
                this.letChar[i].show = true;
            }
        }
    }

    // 
    this.toString = function() {
        var output = "";
        for (var i = 0; i < this.letChar.length; i++) {
            output += this.letChar[i].letterRender();
        }
        return output;
    }
}

module.exports = Word;