var Letter = require("./letter.js");

// creates a word constructor
function Word(value) {
    this.value = value;
    this.letterChar = [];
    this.found = false;

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
            // check the correct letter in each indeces of the 
            // temporary letterChar array
            var found = this.letterChar[i].checkLetterFound(lowerLetter)

            // checks if the letter/result is found or not
            if (!result) {
                result = found;
            }
        }
        // checks if result is not found in the indeces of our chosen word
        // will return 'INCORRECT'
        return result ? result : 'INCORRECT!';
    }

    // this function will render the word 
    // and console log the correct word  
    this.wordRender = function() {
        var output = '';

        for (var i = 0; i < this.letterChar.length; i++) {
            output += this.letterChar[i].letterRender() + ' ';
        }
        console.log();
        console.log(output);
        return output;
    }
};

// exports Word function
module.exports = Word;