function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

let computerScore = 0;
let playerScore = 0;
const Rock = document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");
const Result = document.querySelector("#result");
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");

function PlayRound(playerselection, computerselection) {
  switch (playerselection) {
    case "rock":
      switch (computerselection) {
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
      switch (computerselection) {
        case "Rock":
          playerScore += 1;
          return "The computer played Rock. You win!";
        case "Paper":
          return "The computer also played Paper. It is a tie";
        case "Scissors":
          computerScore += 1;
          return "The computer played Scissors. You Lose";
      }

    case "scissors":
      switch (computerselection) {
        case "Rock":
          computerScore += 1;
          return "The computer played Rock. You Lose";
        case "Paper":
          playerScore += 1;
          return "The computer played Paper. You win!";
        case "Scissors":
          return "The computer also played Scissors. It is a tie";
      }
  }
}

Rock.addEventListener("click", function () {
  Result.textContent = PlayRound("rock", getComputerChoice());
  computer.textContent = "Computer Score:" + computerScore;
  player.textContent = "Player Score:" + playerScore;
  if (computerScore >= 5) {
    Result.textContent = "The computer won. Better luck next time...";
  }
  if (playerScore >= 5) {
    Result.textContent = "You won!";
  }
});
Paper.addEventListener("click", function () {
  Result.textContent = PlayRound("paper", getComputerChoice());
  computer.textContent = "Computer Score:" + computerScore;
  player.textContent = "Player Score:" + playerScore;
  if (computerScore >= 5) {
    Result.textContent = "The computer won. Better luck next time...";
  }
  if (playerscore >= 5) {
    Result.textContent = "You Won!";
  }
});
Scissors.addEventListener("click", function () {
  Result.textContent = PlayRound("scissors", getComputerChoice());
  computer.textContent = "Computer Score:" + computerScore;
  player.textContent = "Player Score:" + playerScore;
  if (computerScore >= 5) {
    Result.textContent = "The computer won. Better luck next time...";
  }
  if (playerScore >= 5) {
    Result.textContent = "You Won!";
  }
});
