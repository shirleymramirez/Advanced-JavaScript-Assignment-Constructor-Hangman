var Word = require("./word.js");
var inquirer = require("inquirer");

function HangmanGame() {

    this.maxGuesses = 10;
    this.guessesMade = " ";

    // Array of Word Options
    this.getRandomWord = function() {
        var wordLists = ["laptop", "cellphone", "computer", "tablet", "notebook", "tablet", "xbox console", "camera", "nintendo", "drone"];
        var randomIndex = Math.floor(Math.random() * wordLists.length);
        return wordLists[randomIndex];
    }
    this.word = new Word(this.getRandomWord());

    this.start = function() {
        var self = this;
        console.log(this.maxGuesses);

        //Game over
        if (this.guessesMade.length >= this.maxGuesses) {
            console.log("You run out of guesses!.");
            return;
        }
        inquirer.prompt([{
            name: "letter",
            message: "Type a letter:",
            // validation check for input keys
            validate: function(str) {
                var regEx = new RegExp("^[a-z A-Zs]{1,1}$");
                return regEx.test(str);
            }
        }]).then(function(input) {
            //Game control
            self.word.checkLetterFound(input.letter);
            self.word.wordRender();
            if (self.word.findword()) {
                console.log("You got it ");
                console.log(self.word.wordRender() + " is the answer !");
                console.log("-------------------------\n");
                self.word = new Word(self.getRandomWord());
            } else {
                self.maxGuesses--;
                console.log("-------------------------\n");
                console.log("You have " + (self.maxGuesses - self.guessesMade.length) + " guesses left.");
            }
            self.start();
        });
    }
}


module.exports = HangmanGame;