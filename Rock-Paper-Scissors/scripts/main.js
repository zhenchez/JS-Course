const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
const rockBtt = document.querySelector(".rock-btt");
const paperBtt = document.querySelector(".paper-btt");
const scissorsBtt = document.querySelector(".scissors-btt");
const resetBtt = document.querySelector(".reset-btt");
const autoPlayBtt = document.querySelector(".auto-play-btt");
let intervalId;
let isAutoPlay = false;

document.querySelector(
  ".score"
).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
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

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerChoice = pickCompuChoice();
      playGame(playerChoice);
    }, 1000);
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
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
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

rockBtt.addEventListener("click", () => {
  playGame("rock");
});
paperBtt.addEventListener("click", () => {
  playGame("paper");
});
scissorsBtt.addEventListener("click", () => {
  playGame("scissors");
});
resetBtt.addEventListener("click", () => {
  resetGame();
});
autoPlayBtt.addEventListener("click", () => {
  autoPlay();
});
document.body.addEventListener("keydown", e => {
  if (e.key === "r") {
    playGame("rock");
  } else if (e.key === "p") {
    playGame("paper");
  } else if (e.key === "s") {
    playGame("scissors");
  }
});
