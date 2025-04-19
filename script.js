
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return playerChoice; 
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main game logic
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
const roundNumber = document.querySelector('#round-number');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        let capitalziedComputerChoice = capitalize(computerChoice);
        let capitalizedPlayerChoice = capitalize(playerChoice);
        roundNumber.textContent = parseInt(roundNumber.textContent) + 1;
        if (playerChoice === computerChoice) {
            result.textContent = "It's a tie this round, no points awarded!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result.textContent = `You win this round! ${capitalizedPlayerChoice} beats ${capitalziedComputerChoice}`;
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else {
            result.textContent = `You lose this round! ${capitalziedComputerChoice} beats ${capitalizedPlayerChoice}!`;
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
        console.log(`Player chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
    })
})

//Add logic that ends the game when 5 rounds are played 
const endGame = document.querySelector('#end-game');
// Check if either player has reached 5 points
function checkGameOver() {
    if (parseInt(playerScore.textContent) === 5) {
        result.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if (parseInt(computerScore.textContent) === 5) {
        result.textContent = "Sorry! The computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}
// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', checkGameOver);
});
