let play = confirm("Let's play RPS game");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const radomNumber = Math.floor(Math.random() * 3);
  return choices[radomNumber];
}
playerScore = 0;
compScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore += 1;
    return "You win!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    compScore += 1;
    return "You lose!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    compScore += 1;
    return "You lose!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    return "You win!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    return "You win!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    compScore += 1;
    return "You lose!";
  } else {
    return "You should choose from rock,paper, or scissors";
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose rock, paper, or scissors");
    console.log("You choose:", playerSelection);
    const computerSelection = getComputerChoice();
    console.log("Computer choose:", computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", compScore);
  }
}

playGame();
