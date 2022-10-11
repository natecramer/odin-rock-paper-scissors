let outputDiv = document.querySelector('#output');

function output(s, color='') {
    // return;
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
    let r = Math.floor(Math.random() * 3);
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
 * @returns {string} String for who wins, either 'Player' or 'Computer'
 */
function evaluate(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Draw';
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Player';
        } else {
            return 'Computer';
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Player';
        } else {
            return 'Computer';
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Player';
        } else {
            return 'Computer';
        }
    }
    return 'Computer';
}

class Game {
    constructor() {
        this.round = 1;
        this.playerScore = 0;
        this.computerScore = 0;
        this.isPlaying = true;
    }

    playRound(playerChoice) {
        // output(`The player chose ${playerChoice}`);
        document.querySelector('#youChose').textContent = `You chose: ${playerChoice}`;

        let computerChoice = getComputerChoice();
        // output(`The computer chose ${computerChoice}`);
        document.querySelector('#computerChose').textContent = `CPU chose: ${computerChoice}`;

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

        document.querySelector('#score').textContent = `${this.playerScore} - ${this.computerScore}`;

        output(`Round ${this.round}: ${winner}`, color);
        // output('---');
        // output(`Round ${++this.round}:`);
        this.round += 1;

        const resultSpan = document.querySelector('#result');
        resultSpan.textContent = `${winner}!`;
        resultSpan.style.color = color;

        const roundElem = document.querySelector('#round');
        roundElem.textContent = `Round ${this.round}`;


        if (this.round >= 6) {
            this.doGameOver();
            roundElem.textContent = `Game Over`;
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