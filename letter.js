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
        if (!this.show) {
            this.show = isEqual;
            if (isEqual) {
                result = "CORRECT";
            }
        } else {
            if (isEqual) {
                result = "DUPLICATE";
            }
        }
        return result;
    }
}

// exports Letter function
module.exports = Letter;