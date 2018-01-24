// npm packages needed to do a prompt for user input
var inquirer = require("inquirer");

// packages used for color changes in the console log output
const chalk = require("chalk");

var Word = require("./word.js");

// assigned constant for colors to be used for console log
const error = chalk.bold.red;
const warning = chalk.keyword("orange");
const log = console.log;


function HangmanGame() {

    this.maxGuesses = 15;

    // just welcome messages at the start of the game
    console.log();
    log(chalk.yellow.underline.bold("Welcome to HangMan Game using Constructors " + chalk.green.underline.bold("by Shirley Ramirez")));
    console.log("You have " + this.maxGuesses + " number of guesses");
    console.log("Our category are electronic gadgets");
    log(chalk.green("GoodLuck!"));
    console.log();

    // game initialization with the randomnized words for the choices
    this.init = function() {
        this.maxGuesses = 15;
        this.guessesMade = " ";

        // Array of Word Options "Theme Electronic Gadgets"
        var wordLists = ["laptop", "cellphone", "computer", "tablet", "notebook", "keyboard", "xbox console", "camera", "nintendo", "drone"];
        var randomIndex = Math.floor(Math.random() * wordLists.length);
        var randomWord = wordLists[randomIndex];

        this.word = new Word(randomWord);
    }

    this.init();

    this.start = function() {
        var self = this;

        //Game over
        if (this.maxGuesses <= 0) {
            // console.log(error("You run out of guesses!."));
            self.playAgain();
            return;
        }

        // ask the player for letter input
        inquirer.prompt([{
            name: "letter",
            message: "Type a letter:",
            // validation check for input keys
            validate: function(str) {
                    var regEx = new RegExp("^[a-z A-Zs]{1,1}$");
                    return regEx.test(str);
                }
                //Game control
        }]).then(function(input) {

            // checks if letter guessed by the user is correct or not
            var result = self.word.checkLetterFound(input.letter);

            // this line will console log the word "CORRECT", "INCORRECT"
            // and "DUPLICATE" 
            console.log();
            if (result === "CORRECT!!!") {
                log(chalk.green(result));
            } else if (result === "INCORRECT!") {
                log(error(result));
                // number of guesses will decrease by 1
                self.maxGuesses--;
            } else if (result === "DUPLICATE!!") {
                console.log(result);
            }
            // rendered word and console log it then ask player if 
            // they want to play again
            self.word.wordRender();
            if (self.word.findword()) {
                console.log();
                log(chalk.blue("You got it "));
                log(chalk.blue(self.word.wordRender() + " is the answer !"));
                console.log("- - - - - - - - - - - - - - - - - - - - - - - -\n");
                self.playAgain();
                return;
            } else {
                // this line here warns the player of their remaining guesses left
                console.log();
                console.log(warning("You have " + self.maxGuesses + " guesses left."));
                console.log();
            }
            // function recursion
            self.start();
        });
    }

    // ask the player if they want to play again 
    this.playAgain = function() {
        var self = this;
        inquirer.prompt([{
            name: "playAgain",
            type: "confirm",
            message: "Would you like to play again?",
            default: true,
        }]).then(function(answer) {
            // this part will check if play again or stop already
            if (answer.playAgain) {
                console.log();
                self.init();
                self.start();
            } else {
                console.log();
                log(chalk.yellow("Thanks for playing!"));
                console.log();
            }

        })
    }
}

// exports HangmanGame function
module.exports = HangmanGame;