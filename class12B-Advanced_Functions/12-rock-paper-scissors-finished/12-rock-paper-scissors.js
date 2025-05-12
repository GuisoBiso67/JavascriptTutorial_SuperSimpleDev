let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score');
  updateScoreElement();
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

function autoPlay(){
  if(!isAutoPlaying){
    interval_ID = setInterval(() => {
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 1000);
  isAutoPlaying = true;
  }else{
    clearInterval(interval_ID);
    isAutoPlaying = false;
  }
}

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
  else{
    console.log('Press r, p or s to play');
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