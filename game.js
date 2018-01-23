var Word = require("./word.js");
var inquirer = require("inquirer");

function HangmanGame() {

    this.maxGuesses = 15;
    this.guessesMade = " ";

    // Array of Word Options
    this.getRandomWord = function() {
        var wordLists = ["laptop", "cellphone", "computer", "tablet", "notebook", "tablet", "xbox console", "camera", "nintendo", "drone"];
        var randomIndex = Math.floor(Math.random() * wordLists.length);
        return wordLists[randomIndex];
    }
    this.word = new Word(this.getRandomWord());

    this.welcomeGreeting = function() {
        console.log();
        console.log("Welcome to HangMan Game in Node.js by Shirley Ramirez");
        console.log("You have " + this.maxGuesses + " number of guesses");
        console.log("Our category are electronic gadgets");
        console.log("GoodLuck!");
        console.log();
    }

    this.welcomeGreeting();

    this.start = function() {
        var self = this;

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
                console.log();
                console.log("You got it ");
                console.log(self.word.wordRender() + " is the answer !");
                console.log("- - - - - - - - - - - - - - - - - - - - - - - -\n");
                console.log();
                self.word = new Word(self.getRandomWord());
                self.maxGuesses = 10;

                self.welcomeGreeting();
            } else {
                self.maxGuesses--;
                console.log("You have " + (self.maxGuesses - self.guessesMade.length) + " guesses left.");
            }
            self.start();
        });
    }
}


module.exports = HangmanGame;