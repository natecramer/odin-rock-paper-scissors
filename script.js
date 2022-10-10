let outputDiv = document.querySelector('#output');

function output(s, color='') {
    // outputDiv.textContent += s + '\n';
    para = document.createElement('p');
    para.textContent = s;
    if (color != '')
        para.style.color = color;
    outputDiv.appendChild(para);
}

// output('Welcome to my game');
// output('My name is timmy');

/**
 * Generates a random choice of 'rock' 'paper' or 'scissors'
 * @returns String 
 */
function getComputerChoice() {
    let r = Math.floor(Math.random() * 2);
    if (r === 0) {
        return 'rock';
    } else if (r === 1) {
        return 'paper';
    } else if (r === 2) {
        return 'scissors';
    }
}

/**
 * Pass in Player and Computer choices for 'rock' 'paper' or 'scissors', and this will evaluate and tell you who wins.
 * @param {string} playerChoice 'rock' 'paper' 'scissors'
 * @param {string} computerChoice 'rock' 'paper' 'scissors'
 * @returns String for who wins, either 'Player' or 'Computer'
 */
function evaluate(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Draw';
    }

    if (playerChoice === 'rock') {
        if (computerChoice = 'paper') {
            return 'Player';
        } else {
            return 'Computer';
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice = 'rock') {
            return 'Player';
        } else {
            return 'Computer';
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice = 'paper') {
            return 'Player';
        } else {
            return 'Computer';
        }
    }
    return 'Computer';
}

/**
 * 
 * @returns string for who won the round, either 'Player' or 'Computer'
 */
function playRound() {
    let playerChoice = String(prompt('rock, paper or scissors?'));
    playerChoice = playerChoice.toLocaleLowerCase();
    
    computerChoice = getComputerChoice();
    output(`The player chose ${playerChoice}`);
    output(`The computer chose ${computerChoice}`);

    let winner = evaluate(playerChoice, computerChoice);
    output(`Winner: ${winner}`);
    return winner;
}

/*
// main game function, this is called once.
function gamex() {
    let playerScore = 0;
    let computerScore = 0;

    // Main game loop
    for (i = 1; i <= 5; i++) {
        output(`Round ${i}/5`)
        let result = playRound();
        if (result === 'Player') {
            playerScore += 1;
        } else if (result === 'Computer') {
            computerScore += 1;
        }
        output(`Player score: ${playerScore}\nComputer score: ${computerScore}\n`);
    }

    // Game end
    output('Game over!');
    output(`The final score is ${playerScore} to ${computerScore}`);
    if (playerScore > computerScore) {
        output(`Player wins!`);
    } else if (playerScore < computerScore) {
        output(`Computer wins!`);
    } else {
        output(`It's a tie!`);
    }
}
*/

class Game {
    constructor() {
        this.round = 1;
        this.playerScore = 0;
        this.computerScore = 0;
        this.isPlaying = true;
    }

    playRound(playerChoice) {
        output(`The player chose ${playerChoice}`);

        let computerChoice = getComputerChoice();
        output(`The computer chose ${computerChoice}`);

        let winner = evaluate(playerChoice, computerChoice);

        let color = ''
        if (winner === 'Player') {
            color = 'green';
            this.playerScore += 1;
        } else if (winner === 'Computer') {
            color = 'red';
            this.computerScore += 1;
        } else if (winner === 'Draw') {
            color = 'orange';
        }

        output(`Winner: ${winner}`, color);
        output('---');
        output(`Round ${++this.round}:`);

        if (this.round >= 6) {
            this.doGameOver();
        }
    }

    doGameOver() {
        // Game end
        this.isPlaying = false;
        output('Game over!');
        output(`The final score is ${this.playerScore} to ${this.computerScore}`);
        if (this.playerScore > this.computerScore) {
            output(`Player wins!`, 'green');
        } else if (this.playerScore < this.computerScore) {
            output(`Computer wins!`, 'red');
        } else {
            output(`It's a tie!`, 'orange');
        }
    }
}
game = new Game();

function doRock() {
    if (game.isPlaying) {
        game.playRound('rock');
    }
}

function doPaper() {
    if (game.isPlaying) {
        game.playRound('paper');
    }
}

function doScissors() {
    if (game.isPlaying) {
        game.playRound('scissors');
    }
}

// document.querySelector('#playButton').addEventListener('click', game);
document.querySelector('#rock').addEventListener('click', doRock);
document.querySelector('#paper').addEventListener('click', doPaper);
document.querySelector('#scissors').addEventListener('click', doScissors);

output('Round 1:');