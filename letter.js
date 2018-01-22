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
        if (!this.show) {
            this.show = guessedLetter === this.value;
        }
    }
}
module.exports = Letter;