console.log('Welcome to my game');

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

function playRound() {
    let playerChoice = String(prompt('rock, paper or scissors?'));
    playerChoice = playerChoice.toLocaleLowerCase();
    // playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.slice(1,playerChoice.length).toLowerCase();

    computerChoice = getComputerChoice();
    console.log(`The player chose ${playerChoice}`);
    console.log(`The computer chose ${computerChoice}`);

    let winner = evaluate(playerChoice, computerChoice);
    console.log(`Winner: ${winner}`);
    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i <= 5; i++) {
        console.log(`Round ${i}/5`)
        let result = playRound();
        if (result === 'Player') {
            playerScore += 1;
        } else if (result === 'Computer') {
            computerScore += 1;
        }
        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}\n`);
    }

    console.log('Game over!');
    console.log(`The final score is ${playerScore} to ${computerScore}`);
    if (playerScore > computerScore) {
        console.log(`Player wins!`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins!`);
    } else {
        console.log(`It's a tie!`);
    }
}

game();