const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

document.querySelector(
  ".score"
).innerHTML = `Wins: ${score.wins}, Losses${score.losses}, Ties${score.ties}`;

function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins}, Losses${score.losses}, Ties${score.ties}`;
}

function pickCompuChoice() {
  let randNum = Math.random();
  if (randNum >= 0 && randNum < 1 / 3) {
    compuChoice = "rock";
  } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
    compuChoice = "paper";
  } else if (randNum >= 2 / 3 && randNum < 3 / 3) {
    compuChoice = "scissors";
  }
  return compuChoice;
}

function playGame(playerChoice) {
  let compuChoice = pickCompuChoice();
  let result = "";
  if (playerChoice === "scissors") {
    if (compuChoice === "rock") {
      result = "You lose!";
    } else if (compuChoice === "paper") {
      result = "You win!";
    } else if (compuChoice === "scissors") {
      result = "Tie.";
    }
  } else if (playerChoice === "rock") {
    if (compuChoice === "rock") {
      result = "Tie.";
    } else if (compuChoice === "paper") {
      result = "You lose!";
    } else if (compuChoice === "scissors") {
      result = "You win!";
    }
  } else if (playerChoice === "paper") {
    if (compuChoice === "rock") {
      result = "You win!";
    } else if (compuChoice === "paper") {
      result = "Tie.";
    } else if (compuChoice === "scissors") {
      result = "You lose!";
    }
  }

  if (result === "Tie.") {
    score.ties++;
  } else if (result === "You lose!") {
    score.losses++;
  } else if (result === "You win!") {
    score.wins++;
  }

  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(".move-result").innerHTML = result;
  document.querySelector(
    ".move"
  ).innerHTML = `You <img class="icons" src="./img/${playerChoice}-emoji.png"> <img class="icons" src="./img/${compuChoice}-emoji.png"> computer`;
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins}, Losses${score.losses}, Ties${score.ties}`;
}
