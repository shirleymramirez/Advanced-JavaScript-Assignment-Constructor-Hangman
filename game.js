var Word = require("./word.js");
var inquirer = require("inquirer");

function HangmanGame() {

    console.log();
    console.log("Welcome to HangMan Game in Node.js by Shirley Ramirez");
    console.log("You have " + this.maxGuesses + " number of guesses");
    console.log("Our category are electronic gadgets");
    console.log("GoodLuck!");
    console.log();

    this.init = function() {
        this.maxGuesses = 15;
        this.guessesMade = " ";

        // Array of Word Options
        var wordLists = ["laptop", "cellphone", "computer", "tablet", "notebook", "tablet", "xbox console", "camera", "nintendo", "drone"];
        var randomIndex = Math.floor(Math.random() * wordLists.length);
        var randomWord = wordLists[randomIndex];

        this.word = new Word(randomWord);
    }
    this.init();

    this.start = function() {
        var self = this;

        //Game over
        if (this.maxGuesses <= 0) {
            console.log("You run out of guesses!.");
            self.playAgain();
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

            // checks if letter guessed by the user is correct or not
            // then number of guesses will decrease by 1
            var result = self.word.checkLetterFound(input.letter);
            console.log(result);
            if (result === "INCORRECT") {
                self.maxGuesses--;
            }
            self.word.wordRender();
            if (self.word.findword()) {
                console.log();
                console.log("You got it ");
                console.log(self.word.wordRender() + " is the answer !");
                console.log("- - - - - - - - - - - - - - - - - - - - - - - -\n");
                self.playAgain();
                return;
            } else {
                console.log("You have " + self.maxGuesses + " guesses left.");
            }
            self.start();
        });
    }
    this.playAgain = function() {
        var self = this;
        inquirer.prompt([{
            name: "playAgain",
            type: "confirm",
            message: "Would you like to play again?",
            default: true,
        }]).then(function(answer) {
            if (answer.playAgain) {
                console.log();
                self.init();
                self.start();
            } else {
                console.log("Thanks for playing!");
            }

        })
    }
}

module.exports = HangmanGame;