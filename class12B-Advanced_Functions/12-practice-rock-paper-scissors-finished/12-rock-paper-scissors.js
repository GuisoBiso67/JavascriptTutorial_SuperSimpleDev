let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

const confirmResetMessage = document.querySelector('.js-confirm-reset');

function resetScore(){
  confirmResetMessage.innerHTML = `Are you sure you want to reset the score? <button class="js-yes-reset yes-reset-button">Yes</button> <button class="js-no-reset no-reset-button">No</button>`;

  document.querySelector('.js-yes-reset')
  .addEventListener('click', () => {
    confirmResetMessage.innerHTML = '';

    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');
    updateScoreElement();
  });

  document.querySelector('.js-no-reset')
    .addEventListener('click', () => {
      confirmResetMessage.innerHTML = '';
    });
}


function playGame(playerMove){
  const computerPick = pickComputerMove();

  let result = '';

  if(playerMove === 'scissors'){
    if(computerPick === 'rock'){
      result = 'You lose!';
    }else if (computerPick === 'paper'){
      result = 'You won!';
    }else if (computerPick === 'scissors'){
      result = 'Tie!';
    }
  }
  else if(playerMove === 'rock'){
    if(computerPick === 'rock'){
      result = 'Tie!';
    }else if (computerPick === 'paper'){
      result = 'You lose!';
    }else if (computerPick === 'scissors'){
      result = 'You won!';
    }
  }
  else if(playerMove === 'paper'){
    if(computerPick === 'rock'){
      result = 'You won!';
    }else if (computerPick === 'paper'){
      result = 'Tie!';
    }else if (computerPick === 'scissors'){
      result = 'You lose!';
    }
  }

  if(result === 'You won!'){
    score.wins++;
  }
  else if(result === 'You lose!'){
    score.losses++;
  }
  else if(result === 'Tie!'){
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-picks')
    .innerHTML = `You | 
<img src="media/${playerMove}-emoji.png" class="pick-icon">
<img src="media/${computerPick}-emoji.png" class="pick-icon">
| Computer</p>`;
}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let isAutoPlaying = false;
let interval_ID;

/* const autoPlay = () => {

}; */

const autoPlayButtonElement = document.querySelector('.js-autoplay-button');

function autoPlay(){
  if(!isAutoPlaying){
    interval_ID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayButtonElement.innerHTML = `Stop Auto Play`;
  }else{
    clearInterval(interval_ID);
    isAutoPlaying = false;
    autoPlayButtonElement.innerHTML = `Auto Play`;
  }
}

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    resetScore();
  });

autoPlayButtonElement.addEventListener('click', () => autoPlay());

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  }
  else if(event.key === 'p'){
    playGame('paper');
  }
  else if(event.key === 's'){
    playGame('scissors');
  }
  else if(event.key === 'a'){
    autoPlay();
  }
  else if(event.key === 'Backspace'){
    resetScore();
  }
  else{
    console.log('Press r (rock), p (paper), s (scissors) or a (auto play) to play');
  }
});

function pickComputerMove(){
  const randomNum = Math.random();
  let computerPick = '';
  /*
      0 -- 1/3 = rock;
    1/3 -- 2/3 = paper;
    2/3 -- 1   = scissor;
  */
  if(randomNum >= 0 && randomNum <= 1/3){
    computerPick = 'rock';
  }else if (randomNum > 1/3 && randomNum <= 2/3){
    computerPick = 'paper';
  }else{
    computerPick = 'scissors';
  }
  return computerPick;
}