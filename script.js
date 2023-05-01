'use strict';
// console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'shuru karo🤗';
document.querySelector('.titlee').textContent = 'THE SECRET NUMBER';
// document.querySelector('.guess').value = 20;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(0, 65, 65)';
  document.querySelector('h1').style.color = 'white';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'shuru karo🤗';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  document.querySelector('.message').textContent = 'nice try🤗';
  if (!guess) {
    document.querySelector('.message').textContent = 'abe number to daal🤨';
  } else if (guess == secretNumber) {
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.message').textContent = 'shi hai guru😎';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('h1').style.color = 'blue';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
      if (guess - 5 > secretNumber) {
        document.querySelector('.message').textContent =
          'bahot zyada daal rha hai🙄';
      } else {
        document.querySelector('.message').textContent = 'halka zyada hai🙄';
      }
    } else {
      document.querySelector('.message').textContent =
        'har gya bro, kya noobda hai😆';
    }
  } else if (guess < secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
      if (guess + 5 < secretNumber) {
        document.querySelector('.message').textContent =
          'bahot kam daal rha hai🙄';
      } else {
        document.querySelector('.message').textContent = 'halka kam hai🙄';
      }
    } else {
      document.querySelector('.message').textContent =
        'har gya bro, kya noobda hai😆';
    }
  }
});
