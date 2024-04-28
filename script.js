let playGame = confirm("Shall we play Rock Paper Scissors?");
if (playGame) {
    playRockPaperScissors();
} else {
    alert("Ok, maybe next time :)");
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    return playerChoice ? playerChoice.trim().toLowerCase() : null;
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    return computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
}

function determineWinner(playerOne, computer) {
    if (playerOne === computer) {
        return "Tie game!";
    } else if (
        (playerOne === "rock" && computer === "paper") ||
        (playerOne === "paper" && computer === "scissors") ||
        (playerOne === "scissors" && computer === "rock")
    ) {
        return "Computer wins!";
    } else {
        return "Player wins!";
    }
}

function playRockPaperScissors() {
    let playerChoice = getPlayerChoice();

    if (playerChoice) {
        let computerChoice = getComputerChoice();
        let result = determineWinner(playerChoice, computerChoice);
        alert(`Player: ${playerChoice}\nComputer: ${computerChoice}\n${result}`);
    } else {
        alert("I guess you changed your mind. Maybe next time. :(");
        return;
    }

    let playAgain = confirm("Play again?");
    if (playAgain) {
        playRockPaperScissors();
    } else {
        alert("Ok, thanks for playing!");
    }
}
