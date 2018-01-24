// this function will render letter pressed by the user
// and number of blanks "_" based on the number of letters in the solution
function Letter(value) {
    this.value = value;
    this.show = false;

    this.letterRender = function() {
            if (this.show) {
                return this.value;
            } else {
                return '_';
            }
        }
        // this function will check the letter found if 
        // it is in the randomIndex of the chosen word
    this.checkLetterFound = function(guessedLetter) {
        var isEqual = guessedLetter === this.value;
        var result;
        // check if the letter is found in chosen word
        if (isEqual) {
            if (this.show) {
                // 2nd time the letter is inputted 
                result = 'DUPLICATE!!';
            } else {
                // first time the letter is inputted
                this.show = true;
                result = "CORRECT!!!";
            }
        }
        return result;
    }
}

// exports Letter function
module.exports = Letter;