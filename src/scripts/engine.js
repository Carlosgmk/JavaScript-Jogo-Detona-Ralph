const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(`.enemy`),
    timeLeft: document.querySelector(`#time-left`),
    score: document.querySelector(`#score`),
  },
  values: {
    timerId: null,
    contDownTimeId: setInterval(countDown, 1000),
    gameVelocity: 900,
    hitPosition: 0,
    result: 0,
    curretTime: 60,
  },
};

function countDown() {
  state.values.curretTime--;
  state.view.timeLeft.textContent = state.values.curretTime;

  if (state.values.curretTime <= 0) {
    clearInterval(state.values.contDownTimeId);
    clearInterval(state.values.timerId);
    alert(`O tempo Acabou! O seu Resultado foi: ${state.values.result}`);
  }
}

function playSound() {
  let audio = new Audio("./src/audios/hit.m4a");
  audio.volume = 0.1
  audio.play();
}

function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;
}

function moveEnemy() {
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addlistenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++;
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound()
      }
    });
  });
}

function init() {
  moveEnemy();
  addlistenerHitBox();
}
init();
