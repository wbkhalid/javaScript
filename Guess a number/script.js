'use strict';
// Variables

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const secretNum = function (number) {
  document.querySelector('.number').textContent = number;
};

//Check button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Congrations You Won');
    secretNum(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b247';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'High Number' : 'low number');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('You lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

//Reset Button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNum('?');
  document.querySelector('.guess').value = ' ';
});
