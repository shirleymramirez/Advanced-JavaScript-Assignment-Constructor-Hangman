function Letter(letChar) {
    this.letChar = letChar;
    // this will check the boolean/property can be shown
    this.appear = false;

    this.letterRender = function() {
        // render a blank 
        if (this.letChar == '') {
            this.appear = true;
            return ' ';
        }
        if (this.appear === false) {
            return '_';
        } else {
            return this.letChar;
        }
    }
}
module.exports = Letter;