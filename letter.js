function Letter(letChar) {
    this.letChar = letChar;

    // this will check the boolean/property of the charater/letter input
    this.appear = false;

    //render letter if existing or not
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