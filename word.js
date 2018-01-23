var Letter = require("./letter.js");

// creates a word constructor
function Word(value) {
    this.value = value;
    this.letterChar = [];
    this.found = false;

    // console.log(value);
    for (var i = 0; i < this.value.length; i++) {
        this.letterChar.push(new Letter(this.value[i]));
    }

    // this function will show all the correct letter found
    this.findword = function() {
        this.found = this.letterChar.every(function(curLet) {
            return curLet.show;
        })
        return this.found;
    }

    // this function will check the letter found if 
    // it is in the randomIndex of the chosen word
    this.checkLetterFound = function(guessedLetter) {

        var lowerLetter = guessedLetter.toLowerCase();
        var result;

        for (var i = 0; i < this.letterChar.length; i++) {
            var found = this.letterChar[i].checkLetterFound(lowerLetter)
            if (!result) {
                result = found;
            }
        }
        return result ? result : 'INCORRECT';
    }

    // this function will render the word 
    this.wordRender = function() {
        var output = '';
        for (var i = 0; i < this.letterChar.length; i++) {
            output += this.letterChar[i].letterRender() + ' ';
        }
        console.log(output);
        return output;
    }
};

module.exports = Word;