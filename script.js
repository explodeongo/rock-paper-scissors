function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 1:
      return "Rock";

    case 2:
      return "Paper";

    default:
      return "Scissors";
  }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "Rock":
          return "The computer also played Rock. It is a tie";
        case "Paper":
          computerScore += 1;
          return "The computer played Paper. You lose.";
        case "Scissors":
          playerScore += 1;
          return "The computer played Scissors. You win!";
      }
    case "paper":
      switch (computerSelection) {
        case "Paper":
          return "The computer also played Paper. It is a tie";
        case "Scissors":
          computerScore += 1;
          return "The computer played Scissors. You lose.";
        case "Rock":
          playerScore += 1;
          return "The computer played Rock. You win!";
      }
    case "scissors":
      switch (computerSelection) {
        case "Scissors":
          return "The computer also played Scissors. It is a tie";
        case "Rock":
          computerScore += 1;
          return "The computer played Rock. You lose.";
        case "Paper":
          playerScore += 1;
          return "The computer played Paper. You win!";
      }
  }
}

const Rock = document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
Rock.addEventListener("click", function () {
  result.textContent = playRound("rock", getComputerChoice());
  computer.textContent = "Computer Score:" + computerScore;
  player.textContent = "Player Score:" + playerScore;
  if (computerScore >= 5) {
    result.textContent = "The computer won. Better luck next time...";
  }
  if (playerScore >= 5) {
    result.textContent = "You won!";
  }
});
Paper.addEventListener("click", function () {
  result.textContent = playRound("paper", getComputerChoice());
  computer.textContent = "Computer Score:" + computerScore;
  player.textContent = "Player Score:" + playerScore;
  if (computerScore >= 5) {
    result.textContent = "The computer won. Better luck next time...";
  }
  if (playerScore >= 5) {
    result.textContent = "You won!";
  }
});
Scissors.addEventListener("click", function () {
  result.textContent = playRound("scissors", getComputerChoice());
  computer.textContent = "Computer Score:" + computerScore;
  player.textContent = "Player Score:" + playerScore;
  if (computerScore >= 5) {
    result.textContent = "The computer won. Better luck next time...";
  }
  if (playerScore >= 5) {
    result.textContent = "You won!";
  }
});
